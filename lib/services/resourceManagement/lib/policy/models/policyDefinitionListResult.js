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
 * List of policy definitions.
 */
class PolicyDefinitionListResult extends Array {
  /**
   * Create a PolicyDefinitionListResult.
   * @property {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PolicyDefinitionListResult
   *
   * @returns {object} metadata of PolicyDefinitionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicyDefinitionListResult',
      type: {
        name: 'Composite',
        className: 'PolicyDefinitionListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PolicyDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'PolicyDefinition'
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

module.exports = PolicyDefinitionListResult;
