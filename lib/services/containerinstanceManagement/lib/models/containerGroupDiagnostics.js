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

/**
 * Container group diagnostic information.
 *
 */
class ContainerGroupDiagnostics {
  /**
   * Create a ContainerGroupDiagnostics.
   * @member {object} [logAnalytics] Container group log analytics information.
   * @member {string} [logAnalytics.workspaceId] The workspace id for log
   * analytics
   * @member {string} [logAnalytics.workspaceKey] The workspace key for log
   * analytics
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerGroupDiagnostics
   *
   * @returns {object} metadata of ContainerGroupDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerGroupDiagnostics',
      type: {
        name: 'Composite',
        className: 'ContainerGroupDiagnostics',
        modelProperties: {
          logAnalytics: {
            required: false,
            serializedName: 'logAnalytics',
            type: {
              name: 'Composite',
              className: 'LogAnalytics'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerGroupDiagnostics;