/**
 * Represents the interface for the S3EventService class for handling S3 events.
 */
export interface IS3EventService {
  /**
   * Converts an S3 event containing a CSV file to JSON format.
   *
   * This function processes the S3 event triggered by the arrival of a CSV file,
   * transforms the CSV data into JSON, and performs necessary operations on the data.
   *
   * @param {any} event - The S3 event object containing information about the uploaded file.
   * @returns {Promise<void>} A Promise that resolves when the processing is completed.
   */
  csvToJson: (event: any) => Promise <void>;

  /**
   * Writes a file to an Amazon S3 bucket.
   * @param {StelioData} data - The data to write to the bucket.
   * @returns {Promise<void>} A promise indicating the completion of the operation.
   */

  /**
   * Checks if essential parameters are present.
   * Throws an error if any essential parameter is missing.
   * @param {GroupementParams} params - The parameters object to validate.
   * @throws {Error} Throws an error if any required parameter is missing.
   */

}
