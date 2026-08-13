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
    define(['ApiClient', 'model/Browser', 'model/Device', 'model/Os'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Browser'), require('./Device'), require('./Os'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.UserAgentClientInfo = factory(root.DocusignMonitor.ApiClient, root.DocusignMonitor.Browser, root.DocusignMonitor.Device, root.DocusignMonitor.Os);
  }
}(this, function(ApiClient, Browser, Device, Os) {
  'use strict';


  /**
   * The UserAgentClientInfo model module.
   * @module model/UserAgentClientInfo
   */

  /**
   * Constructs a new <code>UserAgentClientInfo</code>.
   * @alias module:model/UserAgentClientInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserAgentClientInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAgentClientInfo} obj Optional instance to populate.
   * @return {module:model/UserAgentClientInfo} The populated <code>UserAgentClientInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('browser')) {
        obj['browser'] = Browser.constructFromObject(data['browser']);
      }
      if (data.hasOwnProperty('device')) {
        obj['device'] = Device.constructFromObject(data['device']);
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = Os.constructFromObject(data['os']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Browser} browser
   */
  exports.prototype['browser'] = undefined;
  /**
   * @member {module:model/Device} device
   */
  exports.prototype['device'] = undefined;
  /**
   * @member {module:model/Os} os
   */
  exports.prototype['os'] = undefined;



  return exports;
}));


