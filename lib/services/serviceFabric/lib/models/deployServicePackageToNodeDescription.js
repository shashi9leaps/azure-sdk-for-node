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
 * Defines description for downloading packages associated with a service
 * manifest to image cache on a Service Fabric node.
 *
 *
 */
class DeployServicePackageToNodeDescription {
  /**
   * Create a DeployServicePackageToNodeDescription.
   * @member {string} serviceManifestName
   * @member {string} applicationTypeName
   * @member {string} applicationTypeVersion
   * @member {string} nodeName
   * @member {array} [packageSharingPolicy]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeployServicePackageToNodeDescription
   *
   * @returns {object} metadata of DeployServicePackageToNodeDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployServicePackageToNodeDescription',
      type: {
        name: 'Composite',
        className: 'DeployServicePackageToNodeDescription',
        modelProperties: {
          serviceManifestName: {
            required: true,
            serializedName: 'ServiceManifestName',
            type: {
              name: 'String'
            }
          },
          applicationTypeName: {
            required: true,
            serializedName: 'ApplicationTypeName',
            type: {
              name: 'String'
            }
          },
          applicationTypeVersion: {
            required: true,
            serializedName: 'ApplicationTypeVersion',
            type: {
              name: 'String'
            }
          },
          nodeName: {
            required: true,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          packageSharingPolicy: {
            required: false,
            serializedName: 'PackageSharingPolicy',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PackageSharingPolicyInfoElementType',
                  type: {
                    name: 'Composite',
                    className: 'PackageSharingPolicyInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeployServicePackageToNodeDescription;