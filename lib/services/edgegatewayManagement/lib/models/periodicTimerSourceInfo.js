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
 * Periodic timer event source.
 *
 */
class PeriodicTimerSourceInfo {
  /**
   * Create a PeriodicTimerSourceInfo.
   * @property {date} startTime The time of the day that results in a valid
   * trigger. Schedule is computed with reference to the time specified.
   * @property {string} schedule Periodic frequency at which timer event needs
   * to be raised. Supports daily, hourly, minutes, and seconds.
   * @property {string} [topic] Topic where periodic events are published to
   * IoT device.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PeriodicTimerSourceInfo
   *
   * @returns {object} metadata of PeriodicTimerSourceInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PeriodicTimerSourceInfo',
      type: {
        name: 'Composite',
        className: 'PeriodicTimerSourceInfo',
        modelProperties: {
          startTime: {
            required: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          schedule: {
            required: true,
            serializedName: 'schedule',
            type: {
              name: 'String'
            }
          },
          topic: {
            required: false,
            serializedName: 'topic',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PeriodicTimerSourceInfo;