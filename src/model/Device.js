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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.Device = factory(root.DocusignMonitor.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Device model module.
   * @module model/Device
   */

  /**
   * Constructs a new <code>Device</code>.
   * @alias module:model/Device
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Device} obj Optional instance to populate.
   * @return {module:model/Device} The populated <code>Device</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('family')) {
        obj['family'] = ApiClient.convertToType(data['family'], 'String');
      }
      if (data.hasOwnProperty('brand')) {
        obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} family
   */
  exports.prototype['family'] = undefined;
  /**
   * @member {String} brand
   */
  exports.prototype['brand'] = undefined;
  /**
   * @member {String} model
   */
  exports.prototype['model'] = undefined;



  return exports;
}));


