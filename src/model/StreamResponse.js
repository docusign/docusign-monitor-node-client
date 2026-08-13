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
    define(['ApiClient', 'model/StreamingEventRow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StreamingEventRow'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.StreamResponse = factory(root.DocusignMonitor.ApiClient, root.DocusignMonitor.StreamingEventRow);
  }
}(this, function(ApiClient, StreamingEventRow) {
  'use strict';


  /**
   * The StreamResponse model module.
   * @module model/StreamResponse
   */

  /**
   * Constructs a new <code>StreamResponse</code>.
   * @alias module:model/StreamResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>StreamResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamResponse} obj Optional instance to populate.
   * @return {module:model/StreamResponse} The populated <code>StreamResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resultData')) {
        obj['resultData'] = ApiClient.convertToType(data['resultData'], [StreamingEventRow]);
      }
      if (data.hasOwnProperty('endCursor')) {
        obj['endCursor'] = ApiClient.convertToType(data['endCursor'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/StreamingEventRow>} resultData
   */
  exports.prototype['resultData'] = undefined;
  /**
   * @member {String} endCursor
   */
  exports.prototype['endCursor'] = undefined;



  return exports;
}));


