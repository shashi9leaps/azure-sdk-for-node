// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/nodes/tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d/uploadbatchservicelogs?api-version=2018-12-01.8.0', '*')
  .reply(403, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"TVMCurrentOperationUnsupported\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified compute node does not support the current operation.\\nRequestId:991757a2-23ff-42b7-bb4e-e3e8e7c42382\\nTime:2018-12-11T18:42:35.4037350Z\"\r\n  }\r\n}", { 'content-length': '386',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '991757a2-23ff-42b7-bb4e-e3e8e7c42382',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:42:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/nodes/tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d/uploadbatchservicelogs?api-version=2018-12-01.8.0', '*')
  .reply(403, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"TVMCurrentOperationUnsupported\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified compute node does not support the current operation.\\nRequestId:991757a2-23ff-42b7-bb4e-e3e8e7c42382\\nTime:2018-12-11T18:42:35.4037350Z\"\r\n  }\r\n}", { 'content-length': '386',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '991757a2-23ff-42b7-bb4e-e3e8e7c42382',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:42:35 GMT',
  connection: 'close' });
 return result; }]];