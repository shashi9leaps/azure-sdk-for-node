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

const models = require('./index');

/**
 * Single Namespace item in List or Get Operation
 *
 * @extends models['TrackedResource']
 */
class EHNamespace extends models['TrackedResource'] {
  /**
   * Create a EHNamespace.
   * @member {object} [sku] Properties of sku resource
   * @member {string} [sku.name] Name of this SKU. Possible values include:
   * 'Basic', 'Standard'
   * @member {string} [sku.tier] The billing tier of this particular SKU.
   * Possible values include: 'Basic', 'Standard'
   * @member {number} [sku.capacity] The Event Hubs throughput units, vaule
   * should be 0 to 20 throughput units.
   * @member {string} [provisioningState] Provisioning state of the Namespace.
   * @member {date} [createdAt] The time the Namespace was created.
   * @member {date} [updatedAt] The time the Namespace was updated.
   * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
   * Service Bus operations.
   * @member {string} [metricId] Identifier for Azure Insights metrics.
   * @member {boolean} [isAutoInflateEnabled] Value that indicates whether
   * AutoInflate is enabled for eventhub namespace.
   * @member {number} [maximumThroughputUnits] Upper limit of throughput units
   * when AutoInflate is enabled, vaule should be within 0 to 20 throughput
   * units. ( '0' if AutoInflateEnabled = true)
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of EHNamespace
   *
   * @returns {object} metadata of EHNamespace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EHNamespace',
      type: {
        name: 'Composite',
        className: 'EHNamespace',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          createdAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdAt',
            type: {
              name: 'DateTime'
            }
          },
          updatedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedAt',
            type: {
              name: 'DateTime'
            }
          },
          serviceBusEndpoint: {
            required: false,
            readOnly: true,
            serializedName: 'properties.serviceBusEndpoint',
            type: {
              name: 'String'
            }
          },
          metricId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.metricId',
            type: {
              name: 'String'
            }
          },
          isAutoInflateEnabled: {
            required: false,
            serializedName: 'properties.isAutoInflateEnabled',
            type: {
              name: 'Boolean'
            }
          },
          maximumThroughputUnits: {
            required: false,
            serializedName: 'properties.maximumThroughputUnits',
            constraints: {
              InclusiveMaximum: 20,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = EHNamespace;