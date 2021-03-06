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
 * Defines the Chaos Schedule used by Chaos and the version of the Chaos
 * Schedule. The version value wraps back to 0 after surpassing 2,147,483,647.
 *
 */
class ChaosScheduleDescription {
  /**
   * Create a ChaosScheduleDescription.
   * @property {number} [version] The version number of the Schedule.
   * @property {object} [schedule] Defines the schedule used by Chaos.
   * @property {date} [schedule.startDate] The date and time Chaos will start
   * using this schedule.
   * @property {date} [schedule.expiryDate] The date and time Chaos will
   * continue to use this schedule until.
   * @property {array} [schedule.chaosParametersDictionary] A mapping of string
   * names to Chaos Parameters to be referenced by Chaos Schedule Jobs.
   * @property {array} [schedule.jobs] A list of all Chaos Schedule Jobs that
   * will be automated by the schedule.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ChaosScheduleDescription
   *
   * @returns {object} metadata of ChaosScheduleDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChaosScheduleDescription',
      type: {
        name: 'Composite',
        className: 'ChaosScheduleDescription',
        modelProperties: {
          version: {
            required: false,
            serializedName: 'Version',
            constraints: {
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          schedule: {
            required: false,
            serializedName: 'Schedule',
            type: {
              name: 'Composite',
              className: 'ChaosSchedule'
            }
          }
        }
      }
    };
  }
}

module.exports = ChaosScheduleDescription;
