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
 * Paged Quota Counter list representation.
 *
 */
class QuotaCounterCollection {
  /**
   * Create a QuotaCounterCollection.
   * @property {array} [value] Quota counter values.
   * @property {number} [count] Total record count number across all pages.
   * @property {string} [nextLink] Next page link if any.
   */
  constructor() {
  }

  /**
   * Defines the metadata of QuotaCounterCollection
   *
   * @returns {object} metadata of QuotaCounterCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QuotaCounterCollection',
      type: {
        name: 'Composite',
        className: 'QuotaCounterCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'QuotaCounterContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'QuotaCounterContract'
                  }
              }
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = QuotaCounterCollection;
