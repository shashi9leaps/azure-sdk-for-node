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
 * PersonFace object.
 *
 */
class PersistedFace {
  /**
   * Create a PersistedFace.
   * @member {uuid} persistedFaceId The persistedFaceId of the target face,
   * which is persisted and will not expire. Different from faceId created by
   * Face - Detect and will expire in 24 hours after the detection call.
   * @member {string} [userData] User-provided data attached to the face. The
   * size limit is 1KB.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PersistedFace
   *
   * @returns {object} metadata of PersistedFace
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PersistedFace',
      type: {
        name: 'Composite',
        className: 'PersistedFace',
        modelProperties: {
          persistedFaceId: {
            required: true,
            serializedName: 'persistedFaceId',
            type: {
              name: 'String'
            }
          },
          userData: {
            required: false,
            serializedName: 'userData',
            constraints: {
              MaxLength: 1024
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PersistedFace;