/**
 * Represents the Booking interface, defining the structure of a booking object.
 */
export interface Booking {
  /**
   * The unique identifier for the booking.
   * @type {string}
   */
  id: string;

  /**
   * The partition key for the booking.
   * @type {string}
   */
  pk: string;

  /**
   * The sort key for the booking.
   * @type {string}
   */
  sk: string;

  /**
   * The number of reservations associated with the booking.
   * @type {string}
   */
  no_reservations: number;

  /**
   * The number of booking options available for the booking.
   * @type {string}
   */
  no_options: number;
}

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

export interface StelioData {
  /**
   *
   * Name of file
   * @type {string}
   * @memberof GroupementParams
   */
  name: string;

  /**
   *
   * Data to push in body s3bucket
   * @type {string}
   * @memberof GroupementParams
   */
  body: string;
}
