var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
var assert = require('assert');
var path = require('path');
var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');

var privateKey = config.privateKey;
var integratorKey = config.integratorKey;

var basePath = restApi.BasePath.DEMO;
var oAuthBasePath = oAuth.BasePath.DEMO;

var userId = config.userId;
var RedirectURI = 'https://www.docusign.com/api';
var privateKeyFilename = 'keys/docusign_private_key.txt';
var expiresIn = 3600;

if (privateKey) {
  var buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(privateKey, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(privateKey, 'base64'); // Ta-da
  }

  var text = buf.toString('ascii');
  fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('SDK Unit Tests:', function (done) {
  var apiClient = new docusign.ApiClient({
    basePath: basePath,
    oAuthBasePath: oAuthBasePath
  });
  var scopes = [
    oAuth.Scope.IMPERSONATION,
    oAuth.Scope.SIGNATURE
  ];

  before(function (done) {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(integratorKey, RedirectURI, oAuthBasePath);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));

    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (res) {
        apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

        apiClient.getUserInfo(res.body.access_token)
          .then(function (userInfo) {
            console.log('LoginInformation: ' + JSON.stringify(userInfo));
            done();
          })
          .catch(function (error) {
            if (error) {
              console.log(error);
              return done(error);
            }
          });
      })
      .catch(function (err) {
        if (err) {
          return done(err);
        }
      });
  });

  it('retrieves data set stream', function (done) {
    var dataSetApi = new docusign.DataSetApi(apiClient);
    var datasetName = 'monitor';
    var version = '2.0';
    dataSetApi.getStream(version, datasetName)
      .then(function (data) {
        assert.notEqual(data, undefined);
        return done();
      }).catch(function (e) {
        return done(e);
      });
  });
});
