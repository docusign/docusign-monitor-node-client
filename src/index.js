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
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/Browser', 'model/Device', 'model/IpAddressLocation', 'model/Os', 'model/StreamResponse', 'model/StreamingEventRow', 'model/UserAgentClientInfo', 'model/Version', 'api/DocuMonitorApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/Browser'), require('./model/Device'), require('./model/IpAddressLocation'), require('./model/Os'), require('./model/StreamResponse'), require('./model/StreamingEventRow'), require('./model/UserAgentClientInfo'), require('./model/Version'), require('./api/DocuMonitorApi'));
  }
}(function(Configuration, ApiClient, Browser, Device, IpAddressLocation, Os, StreamResponse, StreamingEventRow, UserAgentClientInfo, Version, DocuMonitorApi) {
  'use strict';

  /**
   * Docusign Node.js API client..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DocusignMonitor = require('index'); // See note below*.
   * var xxxSvc = new DocusignMonitor.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DocusignMonitor.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new DocusignMonitor.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DocusignMonitor.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   */
  var exports = {
	/**
	 * The configuration constructor.
	 * @property {module:Configuration}
	 */
	 Configuration: Configuration,
	/**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Browser model constructor.
     * @property {module:model/Browser}
     */
    Browser: Browser,
    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device: Device,
    /**
     * The IpAddressLocation model constructor.
     * @property {module:model/IpAddressLocation}
     */
    IpAddressLocation: IpAddressLocation,
    /**
     * The Os model constructor.
     * @property {module:model/Os}
     */
    Os: Os,
    /**
     * The StreamResponse model constructor.
     * @property {module:model/StreamResponse}
     */
    StreamResponse: StreamResponse,
    /**
     * The StreamingEventRow model constructor.
     * @property {module:model/StreamingEventRow}
     */
    StreamingEventRow: StreamingEventRow,
    /**
     * The UserAgentClientInfo model constructor.
     * @property {module:model/UserAgentClientInfo}
     */
    UserAgentClientInfo: UserAgentClientInfo,
    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version: Version,
    /**
     * The DocuMonitorApi service constructor.
     * @property {module:api/DocuMonitorApi}
     */
    DocuMonitorApi: DocuMonitorApi
  };

  return exports;
}));