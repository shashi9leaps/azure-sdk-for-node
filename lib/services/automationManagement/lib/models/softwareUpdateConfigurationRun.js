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
 * Software update configuration Run properties.
 *
 */
class SoftwareUpdateConfigurationRun {
  /**
   * Create a SoftwareUpdateConfigurationRun.
   * @member {string} [name] Name of the software update configuration run.
   * @member {string} [id] Resource Id of the software update configuration run
   * @member {object} [softwareUpdateConfiguration] software update
   * configuration triggered this run
   * @member {string} [softwareUpdateConfiguration.name] Name of the software
   * update configuration triggered the software update configuration run
   * @member {string} [status] Status of the software update configuration run.
   * @member {string} [configuredDuration] configured duration for the software
   * update configuration run.
   * @member {string} [osType] Operating system target of the software update
   * configuration triggered this run
   * @member {date} [startTime] Etart time of the software update configuration
   * run.
   * @member {date} [endTime] End time of the software update configuration
   * run.
   * @member {number} [computerCount] Number of computers in the software
   * update configuration run.
   * @member {number} [failedCount] Number of computers with failed status.
   * @member {date} [creationTime] Creation time of theresource, which only
   * appears in the response.
   * @member {string} [createdBy] createdBy property, which only appears in the
   * response.
   * @member {date} [lastModifiedTime] Last time resource was modified, which
   * only appears in the response.
   * @member {string} [lastModifiedBy] lastModifiedBy property, which only
   * appears in the response.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SoftwareUpdateConfigurationRun
   *
   * @returns {object} metadata of SoftwareUpdateConfigurationRun
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'softwareUpdateConfigurationRun',
      type: {
        name: 'Composite',
        className: 'SoftwareUpdateConfigurationRun',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          softwareUpdateConfiguration: {
            required: false,
            serializedName: 'properties.softwareUpdateConfiguration',
            type: {
              name: 'Composite',
              className: 'UpdateConfigurationNavigation'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          configuredDuration: {
            required: false,
            readOnly: true,
            serializedName: 'properties.configuredDuration',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.osType',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            nullable: true,
            readOnly: true,
            serializedName: 'properties.endTime',
            type: {
              name: 'DateTime'
            }
          },
          computerCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.computerCount',
            type: {
              name: 'Number'
            }
          },
          failedCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.failedCount',
            type: {
              name: 'Number'
            }
          },
          creationTime: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          createdBy: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdBy',
            type: {
              name: 'String'
            }
          },
          lastModifiedTime: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedBy: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedBy',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SoftwareUpdateConfigurationRun;