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
 * The service endpoint properties.
 *
 */
class ServiceEndpointPropertiesFormat {
  /**
   * Create a ServiceEndpointPropertiesFormat.
   * @property {string} [service] The type of the endpoint service.
   * @property {array} [locations] A list of locations.
   * @property {string} [provisioningState] The provisioning state of the
   * resource.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceEndpointPropertiesFormat
   *
   * @returns {object} metadata of ServiceEndpointPropertiesFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceEndpointPropertiesFormat',
      type: {
        name: 'Composite',
        className: 'ServiceEndpointPropertiesFormat',
        modelProperties: {
          service: {
            required: false,
            serializedName: 'service',
            type: {
              name: 'String'
            }
          },
          locations: {
            required: false,
            serializedName: 'locations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceEndpointPropertiesFormat;
