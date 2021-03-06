/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";

export default class LogAnalyticsClient extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the LogAnalyticsClient class.
   * @constructor
   *
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: ServiceClientCredentials, baseUri?: string, options?: ServiceClientOptions);

  credentials: ServiceClientCredentials;


  /**
   * @summary Execute an Analytics query
   *
   * Executes an Analytics query for data.
   * [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an
   * example for using POST with an Analytics query.
   *
   * @param {string} workspaceId ID of the workspace. This is Workspace ID from
   * the Properties blade in the Azure portal.
   *
   * @param {object} body The Analytics query. Learn more about the [Analytics
   * query
   * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   *
   * @param {string} body.query The query to execute.
   *
   * @param {string} [body.timespan] Optional. The timespan over which to query
   * data. This is an ISO8601 time period value.  This timespan is applied in
   * addition to any that are specified in the query expression.
   *
   * @param {array} [body.workspaces] A list of workspaces that are included in
   * the query.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<QueryResults>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  queryWithHttpOperationResponse(workspaceId: string, body: models.QueryBody, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.QueryResults>>;

  /**
   * @summary Execute an Analytics query
   *
   * Executes an Analytics query for data.
   * [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an
   * example for using POST with an Analytics query.
   *
   * @param {string} workspaceId ID of the workspace. This is Workspace ID from
   * the Properties blade in the Azure portal.
   *
   * @param {object} body The Analytics query. Learn more about the [Analytics
   * query
   * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   *
   * @param {string} body.query The query to execute.
   *
   * @param {string} [body.timespan] Optional. The timespan over which to query
   * data. This is an ISO8601 time period value.  This timespan is applied in
   * addition to any that are specified in the query expression.
   *
   * @param {array} [body.workspaces] A list of workspaces that are included in
   * the query.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {QueryResults} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {QueryResults} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link QueryResults} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  query(workspaceId: string, body: models.QueryBody, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.QueryResults>;
  query(workspaceId: string, body: models.QueryBody, callback: ServiceCallback<models.QueryResults>): void;
  query(workspaceId: string, body: models.QueryBody, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.QueryResults>): void;
}

export { LogAnalyticsClient, models as LogAnalyticsModels };
