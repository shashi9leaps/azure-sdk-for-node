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
 * Paged Backend list representation.
 */
class BackendCollection extends Array {
  /**
   * Create a BackendCollection.
   * @member {string} [nextLink] Next page link if any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BackendCollection
   *
   * @returns {object} metadata of BackendCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackendCollection',
      type: {
        name: 'Composite',
        className: 'BackendCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BackendContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'BackendContract'
                  }
              }
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

module.exports = BackendCollection;