/**
 * Monitor API
 * An API for an integrator to access the features of DocuSign Monitor
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.DataSet = factory(root.DocusignMonitor.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DataSet model module.
   * @module model/DataSet
   */

  /**
   * Constructs a new <code>DataSet</code>.
   * Methods to fetch organization event data.
   * @alias module:model/DataSet
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DataSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSet} obj Optional instance to populate.
   * @return {module:model/DataSet} The populated <code>DataSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endCursor')) {
        obj['endCursor'] = ApiClient.convertToType(data['endCursor'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Object]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} endCursor
   */
  exports.prototype['endCursor'] = undefined;
  /**
   * 
   * @member {Array.<Object>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


