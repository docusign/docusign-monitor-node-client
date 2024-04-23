# DocuSign Node Client Changelog


See [DocuSign Support Center](https://support.docusign.com/en/releasenotes/) for Product Release Notes.

## [v2.1.0-rc1] - Monitor API v2.0-2.0.0 - 2024-04-23
### Changed
**Security Updates**
- Updated HTTP Client: Due to identified security vulnerabilities in Superagent proxy version 3.0.0, we have transitioned from using Superagent to the more secure Axios HTTP client. This update helps in safeguarding your interactions by patching potential security gaps.

**New Features**
- Proxy Support for HTTP Requests: We've introduced the ability to make HTTP requests through a proxy. This enhancement is particularly useful for users operating within corporate or restricted networks.
- JWT Token Request Functionality: The new sendJWTTokenRequest method allows you to obtain authentication tokens without exposing your privateKey. This method is designed to enhance security in your authentication processes.

**Changes to Existing Features**
- Updated Callback Response Structure: We have made changes to the response structure for callbacks. If you are using callback functions in your integration, please note the updated response object attributes:
> statusCode
header
body

**Migration Guide**
- For those using callback functions, please adjust your implementation to handle the new response structure as detailed above.

## [v2.1.0] - Monitor API v2.0-2.0.0 - 2023-06-14
### Changed
- Added support for version v2.0-2.0.0 of the DocuSign Monitor API.
- Updated the SDK release version.

## [v2.0.0] - Monitor API v2.0-1.1.0 - 2023-01-23
### Breaking 
- Deprecating Node versions <12
### Security
- Update jsonwebtoken package to 9.0.0 addressing CVE-2022-23529

### Changed
- Added support for version v2.0-1.1.0 of the DocuSign Monitor API.
- Updated the SDK release version.

## [v1.1.0] - Monitor API v2.0-1.1.0 - 2022-04-11
### Changed
- Added support for version v2.0-1.1.0 of the DocuSign Monitor API.
- Updated the SDK release version.

## [v1.0.1] - Monitor API v2.0-1.0.1 - 2022-01-10
### Changed
- Added support for version v2.0-1.0.1 of the DocuSign Monitor API.
- Updated the SDK release version.

## [v1.0.0] - Monitor API v2.0-1.0.0 - 2021-06-24
### Changed
- Updated the SDK release version.

## [v1.0.0-beta] - Monitor API v2-1.0.7
### Added
- Added first beta version of the DocuSign Monitor API.
