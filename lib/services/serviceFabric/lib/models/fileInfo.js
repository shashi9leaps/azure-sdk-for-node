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
 * Information about a image store file.
 *
 */
class FileInfo {
  /**
   * Create a FileInfo.
   * @property {string} [fileSize] The size of file in bytes.
   * @property {object} [fileVersion] Information about the version of image
   * store file.
   * @property {string} [fileVersion.versionNumber] The current image store
   * version number for the file is used in image store for checking whether it
   * need to be updated.
   * @property {string} [fileVersion.epochDataLossNumber] The epoch data loss
   * number of image store replica when this file entry was updated or created.
   * @property {string} [fileVersion.epochConfigurationNumber] The epoch
   * configuration version number of the image store replica when this file
   * entry was created or updated.
   * @property {date} [modifiedDate] The date and time when the image store
   * file was last modified.
   * @property {string} [storeRelativePath] The file path relative to the image
   * store root path.
   */
  constructor() {
  }

  /**
   * Defines the metadata of FileInfo
   *
   * @returns {object} metadata of FileInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FileInfo',
      type: {
        name: 'Composite',
        className: 'FileInfo',
        modelProperties: {
          fileSize: {
            required: false,
            serializedName: 'FileSize',
            type: {
              name: 'String'
            }
          },
          fileVersion: {
            required: false,
            serializedName: 'FileVersion',
            type: {
              name: 'Composite',
              className: 'FileVersion'
            }
          },
          modifiedDate: {
            required: false,
            serializedName: 'ModifiedDate',
            type: {
              name: 'DateTime'
            }
          },
          storeRelativePath: {
            required: false,
            serializedName: 'StoreRelativePath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FileInfo;
