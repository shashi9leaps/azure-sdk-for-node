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
 * Service state of Service Fabric Upgrade Orchestration Service.
 *
 */
class UpgradeOrchestrationServiceState {
  /**
   * Create a UpgradeOrchestrationServiceState.
   * @property {string} [serviceState] The state of Service Fabric Upgrade
   * Orchestration Service.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpgradeOrchestrationServiceState
   *
   * @returns {object} metadata of UpgradeOrchestrationServiceState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpgradeOrchestrationServiceState',
      type: {
        name: 'Composite',
        className: 'UpgradeOrchestrationServiceState',
        modelProperties: {
          serviceState: {
            required: false,
            serializedName: 'ServiceState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpgradeOrchestrationServiceState;
