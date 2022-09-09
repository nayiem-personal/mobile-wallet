"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var RxRequest_1 = require("./RxRequest");
var json_typescript_mapper_1 = require("json-typescript-mapper");
/** Http calls from peer url. */
var Http = (function () {
    function Http(network) {
        this.network = network;
        this.timeout = 6000;
        var options = {
            timeout: this.timeout,
        };
        if (network) {
            options['baseURL'] = network.getPeerAPIUrl();
        }
        this.baseRequest = new RxRequest_1.RxRequest(options);
    }
    Http.prototype.getNative = function (url, params, responseType) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var r = new RxRequest_1.RxRequest({ timeout: this.timeout });
        return r.get(url, this.formatParams(params)).map(function (data) { return _this.formatResponse(data, responseType); });
    };
    Http.prototype.get = function (url, params, responseType) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return this.baseRequest.get("/api" + url, this.formatParams(params))
            .map(function (data) { return _this.formatResponse(data, responseType); });
    };
    Http.prototype.post = function (url, body, responseType) {
        var _this = this;
        return this.baseRequest.post(url, body)
            .map(function (data) { return _this.formatResponse(data, responseType); });
    };
    Http.prototype.postNative = function (url, body, responseType, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var r = new RxRequest_1.RxRequest(options);
        return r.post(url, body).map(function (data) { return _this.formatResponse(data, responseType); });
    };
    Http.prototype.put = function (url, data) {
        var options = {
            data: data,
        };
        return this.baseRequest.put(url, options);
    };
    /**
     * Convert JSON response to specific interface.
     */
    Http.prototype.formatResponse = function (response, responseType) {
        try {
            var result = void 0;
            var body = typeof response === 'string' ? JSON.parse(response) : response;
            result = json_typescript_mapper_1.deserialize(responseType, body);
            return result;
        }
        catch (e) {
            throw new Error(e);
        }
    };
    /**
     * Convert property from interface to JSON
     */
    Http.prototype.formatParams = function (params) {
        var options = JSON.parse(JSON.stringify(params) || '{}');
        return { params: options };
    };
    return Http;
}());
exports.default = Http;
//# sourceMappingURL=Http.js.map