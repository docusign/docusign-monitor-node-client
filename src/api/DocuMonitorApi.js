/**
 * Monitor API
 * An API for an integrator to access the features of Docusign Monitor
 *
 * OpenAPI spec version: v3.0
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/StreamResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/StreamResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.DocuMonitorApi = factory(root.DocusignMonitor.Configuration, root.DocusignMonitor.ApiClient, root.DocusignMonitor.StreamResponse);
  }
}(this, function(Configuration, ApiClient, StreamResponse) {
  'use strict';

  /**
   * DocuMonitor service.
   * @module api/DocuMonitorApi
   */

  /**
   * Constructs a new DocuMonitorApi. 
   * @alias module:api/DocuMonitorApi
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
     * (Optional) Callback function to receive the result of the stream operation. If none specified a Promise will be returned.
     * @callback module:api/DocuMonitorApi~streamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamResponse} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Gets customer event data for an organization.
     * Gets customer event data for the organization that owns the integration key.

The results for this endpoint are paginated by their event ingestion time, which can be up to five minutes after the event originally occurred. Use the `cursor` parameter to specify where the query begins in the dataset. Use the `limit` parameter to set the number of records returned.

For a detailed example of how to use `getStream` and retrieve monitoring data, see our guides [How to get monitoring data](/docs/monitor-api/how-to/get-monitoring-data/) and  [Tracking data and handling alerts](/docs/monitor-api/monitor101/tracking-data-handling-alerts/).

**Note**: data is not guaranteed to be in the order of the timestamp of the events. It is returned in the order it was inserted into our database.

### Related topics

- [How to get monitoring data](/docs/monitor-api/how-to/get-monitoring-data/)
- [Tracking data and handling alerts](/docs/monitor-api/monitor101/tracking-data-handling-alerts/)
     * @param {String} organizationId 
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.cursor Specifies a pointer into the dataset where your query will begin. You can either provide an ISO DateTime or a string cursor (from the `endCursor` value in the response). If no value is provided, the query begins from seven days ago.  For example, to fetch event data beginning from January 1, 2022, set this value to `2022-01-01T00:00:00Z`. The response will include data about events starting from that date in chronological order. The response also includes an `endCursor` property. To fetch the next page of event data, call this endpoint again with `cursor` set to the previous `endCursor` value. 
     * @param {Number} optsOrCallback.limit The maximum number of records to return.
     * @param {module:api/DocuMonitorApi~streamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamResponse}
     */
    this.stream = function(organizationId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling stream");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'cursor': optsOrCallback['cursor'],
        'limit': optsOrCallback['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StreamResponse;

      return this.apiClient.callApi(
        '/v1/organizations/{organizationId}/stream', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));