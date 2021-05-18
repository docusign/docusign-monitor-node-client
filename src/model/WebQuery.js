/**
 * DocuSign Monitor API - v2
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
    define(['ApiClient', 'model/Aggregation', 'model/Filter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Aggregation'), require('./Filter'));
  } else {
    // Browser globals (root is window)
    if (!root.DocusignMonitor) {
      root.DocusignMonitor = {};
    }
    root.DocusignMonitor.WebQuery = factory(root.DocusignMonitor.ApiClient, root.DocusignMonitor.Aggregation, root.DocusignMonitor.Filter);
  }
}(this, function(ApiClient, Aggregation, Filter) {
  'use strict';


  /**
   * The WebQuery model module.
   * @module model/WebQuery
   */

  /**
   * Constructs a new <code>WebQuery</code>.
   * @alias module:model/WebQuery
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebQuery} obj Optional instance to populate.
   * @return {module:model/WebQuery} The populated <code>WebQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], [Filter]);
      }
      if (data.hasOwnProperty('aggregations')) {
        obj['aggregations'] = ApiClient.convertToType(data['aggregations'], [Aggregation]);
      }
      if (data.hasOwnProperty('queryScope')) {
        obj['queryScope'] = ApiClient.convertToType(data['queryScope'], 'String');
      }
      if (data.hasOwnProperty('queryScopeId')) {
        obj['queryScopeId'] = ApiClient.convertToType(data['queryScopeId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Filter>} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * @member {Array.<module:model/Aggregation>} aggregations
   */
  exports.prototype['aggregations'] = undefined;
  /**
   * @member {module:model/WebQuery.QueryScopeEnum} queryScope
   */
  exports.prototype['queryScope'] = undefined;
  /**
   * @member {String} queryScopeId
   */
  exports.prototype['queryScopeId'] = undefined;


  /**
   * Allowed values for the <code>queryScope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.QueryScopeEnum = {
    /**
     * value: "AccountId"
     * @const
     */
    accountId: "AccountId",

    /**
     * value: "OrganizationId"
     * @const
     */
    organizationId: "OrganizationId",

    /**
     * value: "None"
     * @const
     */
    none: "None"
  };


  return exports;
}));


