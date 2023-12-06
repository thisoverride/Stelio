/**
 * Represents the GroupementParams interface, defining the structure of a GroupementParams object.
 */
export interface GroupementParams {
  /**
   *
   * Region of the service.
   * @type {string}
   * @memberof GroupementParams
   */
  region: string;

  /**
   *
   * Separator used by CSV file.
   * @type {string}
   * @memberof GroupementParams
   */
  separator: string;

  /**
   *
   * Key to use for data grouping.
   * @type {string}
   * @memberof GroupementParams
   */
  groupementKey: string;

  /**
   *
   * Output data format.
   * @type {string}
   * @memberof GroupementParams
   */
  format: string;

  /**
   *
   * Regular expression for formatting the final filename
   * @type {string}
   * @memberof GroupementParams
   */
  regexNameFile: string;

  /**
   *
   * Regular expression for formatting the final filename
   * @type {string}
   * @memberof GroupementParams
   */
  s3Bucket: string;

  /**
   *
   * S3 destination to push data
   * @type {string}
   * @memberof GroupementParams
   */
  destination: string;

  /**
   *
   * Regular expression for formatting the final filename
   * @type {string}
   * @memberof GroupementParams
   */
  s3Event: any;
}

/**
 * Represents data to be sent to an S3 bucket.
 * @interface StelioData
 */
export interface StelioData {
  /**
   *
* The name of the file.
   * @type {string}
   * @memberof StelioData
   */
  
  name: string;

  /**
   *
   * The data to be uploaded to the body of the S3 bucket.
   * @type {string}
   * @memberof StelioData
   */
  body: string;
}
