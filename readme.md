# Stelio

This AWS S3 Event Service is a TypeScript-based module designed to process CSV files from an S3 bucket, convert them to JSON, and store the resulting data back into an S3 bucket.

## Features

- **CSV to JSON Conversion**: Convert CSV files stored in an S3 bucket to JSON format.
- **S3 Integration**: Utilizes AWS SDK to interact with S3 buckets for data processing.
- **Event-Driven Architecture**: Triggers processing based on events occurring in the specified S3 bucket.
- **Serverless**: Designed to be used in a serverless environment.

## Installation

This module is written in TypeScript. To install dependencies and run the project, use the following steps:

1. Install Node.js (if not already installed).
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Configure AWS credentials.

## Usage

To use this service, make sure to:

1. Provide AWS credentials with appropriate permissions.
2. Set up the necessary configuration parameters in your paramteres store environment or as input.
