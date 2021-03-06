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
 * @summary The result of listing the certificates in the account.
 */
class CertificateListResult extends Array {
  /**
   * Create a CertificateListResult.
   * @property {string} [odatanextLink]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CertificateListResult
   *
   * @returns {object} metadata of CertificateListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CertificateListResult',
      type: {
        name: 'Composite',
        className: 'CertificateListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CertificateElementType',
                  type: {
                    name: 'Composite',
                    className: 'Certificate'
                  }
              }
            }
          },
          odatanextLink: {
            required: false,
            serializedName: 'odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CertificateListResult;
