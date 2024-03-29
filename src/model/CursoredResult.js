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
    root.DocusignMonitor.CursoredResult = factory(root.DocusignMonitor.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The CursoredResult model module.
   * @module model/CursoredResult
   */

  /**
   * Constructs a new <code>CursoredResult</code>.
   * 
   * @alias module:model/CursoredResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CursoredResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CursoredResult} obj Optional instance to populate.
   * @return {module:model/CursoredResult} The populated <code>CursoredResult</code> instance.
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


