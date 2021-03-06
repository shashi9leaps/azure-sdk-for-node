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
 * Represents a recommended elastic pool.
 *
 * @extends models['ProxyResource']
 */
class RecommendedElasticPool extends models['ProxyResource'] {
  /**
   * Create a RecommendedElasticPool.
   * @property {string} [databaseEdition] The edition of the recommended
   * elastic pool. The ElasticPoolEdition enumeration contains all the valid
   * editions. Possible values include: 'Basic', 'Standard', 'Premium'
   * @property {number} [dtu] The DTU for the recommended elastic pool.
   * @property {number} [databaseDtuMin] The minimum DTU for the database.
   * @property {number} [databaseDtuMax] The maximum DTU for the database.
   * @property {number} [storageMB] Gets storage size in megabytes.
   * @property {date} [observationPeriodStart] The observation period start
   * (ISO8601 format).
   * @property {date} [observationPeriodEnd] The observation period start
   * (ISO8601 format).
   * @property {number} [maxObservedDtu] Gets maximum observed DTU.
   * @property {number} [maxObservedStorageMB] Gets maximum observed storage in
   * megabytes.
   * @property {array} [databases] The list of databases in this pool. Expanded
   * property
   * @property {array} [metrics] The list of databases housed in the server.
   * Expanded property
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RecommendedElasticPool
   *
   * @returns {object} metadata of RecommendedElasticPool
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecommendedElasticPool',
      type: {
        name: 'Composite',
        className: 'RecommendedElasticPool',
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
          databaseEdition: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseEdition',
            type: {
              name: 'String'
            }
          },
          dtu: {
            required: false,
            serializedName: 'properties.dtu',
            type: {
              name: 'Number'
            }
          },
          databaseDtuMin: {
            required: false,
            serializedName: 'properties.databaseDtuMin',
            type: {
              name: 'Number'
            }
          },
          databaseDtuMax: {
            required: false,
            serializedName: 'properties.databaseDtuMax',
            type: {
              name: 'Number'
            }
          },
          storageMB: {
            required: false,
            serializedName: 'properties.storageMB',
            type: {
              name: 'Number'
            }
          },
          observationPeriodStart: {
            required: false,
            readOnly: true,
            serializedName: 'properties.observationPeriodStart',
            type: {
              name: 'DateTime'
            }
          },
          observationPeriodEnd: {
            required: false,
            readOnly: true,
            serializedName: 'properties.observationPeriodEnd',
            type: {
              name: 'DateTime'
            }
          },
          maxObservedDtu: {
            required: false,
            readOnly: true,
            serializedName: 'properties.maxObservedDtu',
            type: {
              name: 'Number'
            }
          },
          maxObservedStorageMB: {
            required: false,
            readOnly: true,
            serializedName: 'properties.maxObservedStorageMB',
            type: {
              name: 'Number'
            }
          },
          databases: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TrackedResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'TrackedResource'
                  }
              }
            }
          },
          metrics: {
            required: false,
            readOnly: true,
            serializedName: 'properties.metrics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RecommendedElasticPoolMetricElementType',
                  type: {
                    name: 'Composite',
                    className: 'RecommendedElasticPoolMetric'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = RecommendedElasticPool;
