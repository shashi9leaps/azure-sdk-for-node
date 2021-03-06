/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Information about feature.
 */
export interface FeatureProperties {
  /**
   * The registration state of the feature for the subscription.
   */
  state?: string;
}

/**
 * Previewed feature information.
 */
export interface FeatureResult {
  /**
   * The name of the feature.
   */
  name?: string;
  /**
   * Properties of the previewed feature.
   */
  properties?: FeatureProperties;
  /**
   * The resource ID of the feature.
   */
  id?: string;
  /**
   * The resource type of the feature.
   */
  type?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Features
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * Microsoft.Features operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Result of the request to list Microsoft.Features operations. It contains a list of operations
 * and a URL link to get the next set of results.
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * List of previewed features.
 */
export interface FeatureOperationsListResult extends Array<FeatureResult> {
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}
