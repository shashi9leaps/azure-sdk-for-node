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
 * Deployment operation properties.
 *
 */
class DeploymentOperationProperties {
  /**
   * Create a DeploymentOperationProperties.
   * @property {string} [provisioningState] The state of the provisioning.
   * @property {date} [timestamp] The date and time of the operation.
   * @property {string} [serviceRequestId] Deployment operation service request
   * id.
   * @property {string} [statusCode] Operation status code.
   * @property {object} [statusMessage] Operation status message.
   * @property {object} [targetResource] The target resource.
   * @property {string} [targetResource.id] The ID of the resource.
   * @property {string} [targetResource.resourceName] The name of the resource.
   * @property {string} [targetResource.resourceType] The type of the resource.
   * @property {object} [request] The HTTP request message.
   * @property {object} [request.content] HTTP message content.
   * @property {object} [response] The HTTP response message.
   * @property {object} [response.content] HTTP message content.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeploymentOperationProperties
   *
   * @returns {object} metadata of DeploymentOperationProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeploymentOperationProperties',
      type: {
        name: 'Composite',
        className: 'DeploymentOperationProperties',
        modelProperties: {
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            readOnly: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          serviceRequestId: {
            required: false,
            readOnly: true,
            serializedName: 'serviceRequestId',
            type: {
              name: 'String'
            }
          },
          statusCode: {
            required: false,
            readOnly: true,
            serializedName: 'statusCode',
            type: {
              name: 'String'
            }
          },
          statusMessage: {
            required: false,
            readOnly: true,
            serializedName: 'statusMessage',
            type: {
              name: 'Object'
            }
          },
          targetResource: {
            required: false,
            readOnly: true,
            serializedName: 'targetResource',
            type: {
              name: 'Composite',
              className: 'TargetResource'
            }
          },
          request: {
            required: false,
            readOnly: true,
            serializedName: 'request',
            type: {
              name: 'Composite',
              className: 'HttpMessage'
            }
          },
          response: {
            required: false,
            readOnly: true,
            serializedName: 'response',
            type: {
              name: 'Composite',
              className: 'HttpMessage'
            }
          }
        }
      }
    };
  }
}

module.exports = DeploymentOperationProperties;
