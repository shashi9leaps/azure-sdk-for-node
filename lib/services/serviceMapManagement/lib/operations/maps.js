/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Generates the specified map.
 *
 * @param {string} resourceGroupName Resource group name within the specified
 * subscriptionId.
 *
 * @param {string} workspaceName OMS workspace containing the resources of
 * interest.
 *
 * @param {object} request Request options.
 *
 * @param {date} [request.startTime] Map interval start time.
 *
 * @param {date} [request.endTime] Map interval end time.
 *
 * @param {string} request.kind Polymorphic Discriminator
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link MapResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _generate(resourceGroupName, workspaceName, request, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 64)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 64');
      }
      if (resourceGroupName.length < 1)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (resourceGroupName.match(/[a-zA-Z0-9_-]+/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9_-]+/');
      }
    }
    if (workspaceName === null || workspaceName === undefined || typeof workspaceName.valueOf() !== 'string') {
      throw new Error('workspaceName cannot be null or undefined and it must be of type string.');
    }
    if (workspaceName !== null && workspaceName !== undefined) {
      if (workspaceName.length > 63)
      {
        throw new Error('"workspaceName" should satisfy the constraint - "MaxLength": 63');
      }
      if (workspaceName.length < 3)
      {
        throw new Error('"workspaceName" should satisfy the constraint - "MinLength": 3');
      }
      if (workspaceName.match(/[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]/) === null)
      {
        throw new Error('"workspaceName" should satisfy the constraint - "Pattern": /[a-zA-Z0-9_][a-zA-Z0-9_-]+[a-zA-Z0-9_]/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (request === null || request === undefined) {
      throw new Error('request cannot be null or undefined.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/generateMap';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{workspaceName}', encodeURIComponent(workspaceName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      let requestModelMapper = new client.models['MapRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(request, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['MapResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a Maps. */
class Maps {
  /**
   * Create a Maps.
   * @param {ServicemapManagementClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._generate = _generate;
  }

  /**
   * Generates the specified map.
   *
   * @param {string} resourceGroupName Resource group name within the specified
   * subscriptionId.
   *
   * @param {string} workspaceName OMS workspace containing the resources of
   * interest.
   *
   * @param {object} request Request options.
   *
   * @param {date} [request.startTime] Map interval start time.
   *
   * @param {date} [request.endTime] Map interval end time.
   *
   * @param {string} request.kind Polymorphic Discriminator
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<MapResponse>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  generateWithHttpOperationResponse(resourceGroupName, workspaceName, request, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._generate(resourceGroupName, workspaceName, request, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Generates the specified map.
   *
   * @param {string} resourceGroupName Resource group name within the specified
   * subscriptionId.
   *
   * @param {string} workspaceName OMS workspace containing the resources of
   * interest.
   *
   * @param {object} request Request options.
   *
   * @param {date} [request.startTime] Map interval start time.
   *
   * @param {date} [request.endTime] Map interval end time.
   *
   * @param {string} request.kind Polymorphic Discriminator
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {MapResponse} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link MapResponse} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  generate(resourceGroupName, workspaceName, request, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._generate(resourceGroupName, workspaceName, request, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._generate(resourceGroupName, workspaceName, request, options, optionalCallback);
    }
  }

}

module.exports = Maps;
