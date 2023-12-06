import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import type { Booking, GroupementParams, StelioData } from '../@iresa-extract/booking/Iresa';
import type { IS3EventService } from '../service/IS3EventService';

export default class S3EventService implements IS3EventService {
  private readonly params: GroupementParams;

  constructor (params: GroupementParams) {
    this.params = params;
    this.notEmptyParams(this.params);
  }

  private async extractDataCsv (): Promise <Record <string, Booking[]> > {
    const client: S3Client = new S3Client({ region: this.params.region });
    const bucket: string = this.params.s3Event.detail.bucket.name;
    const key: string = this.params.s3Event.detail.object.key;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { Body } = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }));

    const csvData: string = Body ? await Body.transformToString() : '';

    if (csvData === '') {
      console.warn('The fetched CSV data is empty.');
      process.exit();
    }

    const lines: string[] = csvData.split('\n');
    const headers: string[] = lines[0].split(this.params.separator);

    const result = lines.slice(1).map((line: string) => {
      const values: string[] = line.split(this.params.separator);
      const csvObj: Record<string, string> = {};

      headers.forEach((header, i) => (csvObj[header] = values[i]));
      return csvObj;
    });

    const data: Record <string, any[]> = {};
    result.forEach((items: any) => {
      if (Object.keys(items).length) {
        const targetGroupement: string = items[this.params.groupementKey];

        if (targetGroupement) {
          if (!data[targetGroupement]) {
            data[targetGroupement] = [];
          }
          data[targetGroupement].push(items);
        }
      }
    });

    return data;
  }

  public async csvToJson (): Promise<void> {
    const data = await this.extractDataCsv();
    const associateKey: string[] = Object.keys(data);

    for (let i: number = 0; i < associateKey.length; i++) {
      const groupedPackage: Booking[] = data[associateKey[i]];
      const fullFilename: string = associateKey[i];
      const fileName: string = fullFilename.replace(this.params.regexNameFile, '');

      const stelioData: StelioData = {
        name: `${fileName}.${this.params.format}`,
        body: JSON.stringify(groupedPackage)
      };

      await this.putFileToS3Bucket(stelioData);
    }
  }

  private async putFileToS3Bucket (data: StelioData): Promise<void> {
    const s3Client = new S3Client({ region: this.params.region });
    const s3Params = { Bucket: this.params.s3Bucket, Key: `${this.params.destination}/${data.name}`, Body: data.body };

    await s3Client.send(new PutObjectCommand(s3Params));
    console.info('Data written to S3 bucket.');
    console.log(s3Params);
  }

  private notEmptyParams (params: GroupementParams): void {
    if (!this.params?.region || !this.params?.separator || !this.params?.groupementKey || !this.params?.format || !this.params.destination) {
      throw new Error(`Invalid Param ${JSON.stringify(params)} Some required parameters are missing.`);
    }
  }
}
