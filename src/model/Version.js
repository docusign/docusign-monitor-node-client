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
    root.DocusignMonitor.Version = factory(root.DocusignMonitor.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Version model module.
   * @module model/Version
   */

  /**
   * Constructs a new <code>Version</code>.
   * @alias module:model/Version
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Version} obj Optional instance to populate.
   * @return {module:model/Version} The populated <code>Version</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('major')) {
        obj['major'] = ApiClient.convertToType(data['major'], 'String');
      }
      if (data.hasOwnProperty('minor')) {
        obj['minor'] = ApiClient.convertToType(data['minor'], 'String');
      }
      if (data.hasOwnProperty('patch')) {
        obj['patch'] = ApiClient.convertToType(data['patch'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} major
   */
  exports.prototype['major'] = undefined;
  /**
   * @member {String} minor
   */
  exports.prototype['minor'] = undefined;
  /**
   * @member {String} patch
   */
  exports.prototype['patch'] = undefined;



  return exports;
}));


