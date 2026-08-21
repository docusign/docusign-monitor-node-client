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
    define(['ApiClient', 'model/Version'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Version'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.Browser = factory(root.DocusignMonitor.ApiClient, root.DocusignMonitor.Version);
  }
}(this, function(ApiClient, Version) {
  'use strict';


  /**
   * The Browser model module.
   * @module model/Browser
   */

  /**
   * Constructs a new <code>Browser</code>.
   * @alias module:model/Browser
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Browser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Browser} obj Optional instance to populate.
   * @return {module:model/Browser} The populated <code>Browser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('family')) {
        obj['family'] = ApiClient.convertToType(data['family'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = Version.constructFromObject(data['version']);
      }
    }
    return obj;
  }

  /**
   * @member {String} family
   */
  exports.prototype['family'] = undefined;
  /**
   * @member {module:model/Version} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


