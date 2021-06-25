/**
 * Monitor API
 * Use the DocuSign Monitor API to receive a data feed containing atypical security events within your DocuSign account. This data goes directly to an integrated application or website.
 *
 * OpenAPI spec version: v2.0
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/CursoredResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/CursoredResult'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.DataSetApi = factory(root.DocusignMonitor.Configuration, root.DocusignMonitor.ApiClient, root.DocusignMonitor.CursoredResult);
  }
}(this, function(Configuration, ApiClient, CursoredResult) {
  'use strict';

  /**
   * DataSet service.
   * @module api/DataSetApi
   */

  /**
   * Constructs a new DataSetApi. 
   * @alias module:api/DataSetApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional) Callback function to receive the result of the getStream operation. If none specified a Promise will be returned.
     * @callback module:api/DataSetApi~getStreamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CursoredResult} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * 
     * Allows for the streaming of data as it becomes available

Required scopes: impersonation
     * @param {String} version The requested API version
     * @param {String} dataSetName The name of the dataset to stream
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.cursor The cursor value to continue querying the data with. For an intial call, use empty string
     * @param {Number} optsOrCallback.limit The maximum number of records to return, minimum of 1, maximum of 2000. Defaults to 1000 if no value is provided (default to 1000)
     * @param {module:api/DataSetApi~getStreamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CursoredResult}
     */
    this.getStream = function(version, dataSetName, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling getStream");
      }

      // verify the required parameter 'dataSetName' is set
      if (dataSetName === undefined || dataSetName === null) {
        throw new Error("Missing the required parameter 'dataSetName' when calling getStream");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'version': version,
        'dataSetName': dataSetName
      };
      var queryParams = {
        'cursor': optsOrCallback['cursor'],
        'limit': optsOrCallback['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CursoredResult;

      return this.apiClient.callApi(
        '/api/v{version}/datasets/{dataSetName}/stream', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));