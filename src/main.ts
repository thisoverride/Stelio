import S3EventService from './service/AwsS3EventService';
import type { S3EventRecord } from 'aws-lambda';
import type { GroupementParams } from './@iresa-extract/booking/Iresa';
import 'dotenv/config';

export const handler = async (event: S3EventRecord): Promise<void> => {
  try {
    const parameters: GroupementParams = {
      s3Event: event,
      region: process.env.REGION ?? '',
      separator: process.env.SEPARATOR ?? '',
      groupementKey: process.env.GROUPEMENT_KEY ?? '',
      destination: process.env.DESTINATION ?? '',
      format: process.env.FROMAT ?? '',
      s3Bucket: process.env.S3_TARGET_BUCKET ?? '',
      regexNameFile: process.env.EXPRESSION as string ?? ''
    };

    const s3EventConvertor: S3EventService = new S3EventService(parameters);
    const functionFromEnv: string = process.env.FUNCTION as string;

    if (functionFromEnv in s3EventConvertor && typeof (s3EventConvertor as any)[functionFromEnv] === 'function') {
      (s3EventConvertor as any)[functionFromEnv]();
    } else {
      throw new Error(`Function ${functionFromEnv} not exist.`);
    }
  } catch (error) {
    console.error(error);
  }
};
