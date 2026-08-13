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
    define(['ApiClient', 'model/IpAddressLocation', 'model/UserAgentClientInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IpAddressLocation'), require('./UserAgentClientInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.StreamingEventRow = factory(root.DocusignMonitor.ApiClient, root.DocusignMonitor.IpAddressLocation, root.DocusignMonitor.UserAgentClientInfo);
  }
}(this, function(ApiClient, IpAddressLocation, UserAgentClientInfo) {
  'use strict';


  /**
   * The StreamingEventRow model module.
   * @module model/StreamingEventRow
   */

  /**
   * Constructs a new <code>StreamingEventRow</code>.
   * @alias module:model/StreamingEventRow
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>StreamingEventRow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamingEventRow} obj Optional instance to populate.
   * @return {module:model/StreamingEventRow} The populated <code>StreamingEventRow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
      if (data.hasOwnProperty('eventId')) {
        obj['eventId'] = ApiClient.convertToType(data['eventId'], 'String');
      }
      if (data.hasOwnProperty('site')) {
        obj['site'] = ApiClient.convertToType(data['site'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('integratorKey')) {
        obj['integratorKey'] = ApiClient.convertToType(data['integratorKey'], 'String');
      }
      if (data.hasOwnProperty('userAgent')) {
        obj['userAgent'] = ApiClient.convertToType(data['userAgent'], 'String');
      }
      if (data.hasOwnProperty('userAgentClientInfo')) {
        obj['userAgentClientInfo'] = UserAgentClientInfo.constructFromObject(data['userAgentClientInfo']);
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('ipAddressLocation')) {
        obj['ipAddressLocation'] = IpAddressLocation.constructFromObject(data['ipAddressLocation']);
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('property')) {
        obj['property'] = ApiClient.convertToType(data['property'], 'String');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('isUserMemberOfDomain')) {
        obj['isUserMemberOfDomain'] = ApiClient.convertToType(data['isUserMemberOfDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('referencedUserIsMemberOfDomain')) {
        obj['referencedUserIsMemberOfDomain'] = ApiClient.convertToType(data['referencedUserIsMemberOfDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('referencedUserId')) {
        obj['referencedUserId'] = ApiClient.convertToType(data['referencedUserId'], 'String');
      }
      if (data.hasOwnProperty('proxyStatus')) {
        obj['proxyStatus'] = ApiClient.convertToType(data['proxyStatus'], 'String');
      }
      if (data.hasOwnProperty('proxyType')) {
        obj['proxyType'] = ApiClient.convertToType(data['proxyType'], 'String');
      }
      if (data.hasOwnProperty('proxyLevel')) {
        obj['proxyLevel'] = ApiClient.convertToType(data['proxyLevel'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('device')) {
        obj['device'] = ApiClient.convertToType(data['device'], 'String');
      }
      if (data.hasOwnProperty('browser')) {
        obj['browser'] = ApiClient.convertToType(data['browser'], 'String');
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = ApiClient.convertToType(data['os'], 'String');
      }
      if (data.hasOwnProperty('affectedUserId')) {
        obj['affectedUserId'] = ApiClient.convertToType(data['affectedUserId'], 'String');
      }
      if (data.hasOwnProperty('affectedUserIsMemberOfDomain')) {
        obj['affectedUserIsMemberOfDomain'] = ApiClient.convertToType(data['affectedUserIsMemberOfDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {String} eventId
   */
  exports.prototype['eventId'] = undefined;
  /**
   * @member {String} site
   */
  exports.prototype['site'] = undefined;
  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} integratorKey
   */
  exports.prototype['integratorKey'] = undefined;
  /**
   * @member {String} userAgent
   */
  exports.prototype['userAgent'] = undefined;
  /**
   * @member {module:model/UserAgentClientInfo} userAgentClientInfo
   */
  exports.prototype['userAgentClientInfo'] = undefined;
  /**
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * @member {module:model/IpAddressLocation} ipAddressLocation
   */
  exports.prototype['ipAddressLocation'] = undefined;
  /**
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {String} property
   */
  exports.prototype['property'] = undefined;
  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Boolean} isUserMemberOfDomain
   */
  exports.prototype['isUserMemberOfDomain'] = undefined;
  /**
   * @member {Boolean} referencedUserIsMemberOfDomain
   */
  exports.prototype['referencedUserIsMemberOfDomain'] = undefined;
  /**
   * @member {String} referencedUserId
   */
  exports.prototype['referencedUserId'] = undefined;
  /**
   * @member {String} proxyStatus
   */
  exports.prototype['proxyStatus'] = undefined;
  /**
   * @member {String} proxyType
   */
  exports.prototype['proxyType'] = undefined;
  /**
   * @member {String} proxyLevel
   */
  exports.prototype['proxyLevel'] = undefined;
  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} device
   */
  exports.prototype['device'] = undefined;
  /**
   * @member {String} browser
   */
  exports.prototype['browser'] = undefined;
  /**
   * @member {String} os
   */
  exports.prototype['os'] = undefined;
  /**
   * @member {String} affectedUserId
   */
  exports.prototype['affectedUserId'] = undefined;
  /**
   * @member {Boolean} affectedUserIsMemberOfDomain
   */
  exports.prototype['affectedUserIsMemberOfDomain'] = undefined;
  /**
   * @member {Object.<String, Object>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


