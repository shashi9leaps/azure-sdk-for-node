// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988/ListAccountSas?api-version=2016-12-01', '*')
  .reply(200, "{\"accountSasToken\":\"sv=2015-04-05&ss=bftq&srt=sco&sp=rdwlacup&st=2017-05-08T09%3A16%3A12Z&se=2017-05-08T10%3A16%3A12Z&spr=https,http&sig=3g5omTfT%2BrS1SQHkt67ys4RjDL98OVa6%2BKmiqaoh21s%3D\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7d86c1fd-d8e2-4c38-8fff-4c9c2569ba1b',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '7d86c1fd-d8e2-4c38-8fff-4c9c2569ba1b',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091614Z:7d86c1fd-d8e2-4c38-8fff-4c9c2569ba1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988/ListAccountSas?api-version=2016-12-01', '*')
  .reply(200, "{\"accountSasToken\":\"sv=2015-04-05&ss=bftq&srt=sco&sp=rdwlacup&st=2017-05-08T09%3A16%3A12Z&se=2017-05-08T10%3A16%3A12Z&spr=https,http&sig=3g5omTfT%2BrS1SQHkt67ys4RjDL98OVa6%2BKmiqaoh21s%3D\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7d86c1fd-d8e2-4c38-8fff-4c9c2569ba1b',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '7d86c1fd-d8e2-4c38-8fff-4c9c2569ba1b',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091614Z:7d86c1fd-d8e2-4c38-8fff-4c9c2569ba1b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:13 GMT',
  connection: 'close' });
 return result; }]];