"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var axios_1 = require("axios");
/** Based on @waldojeffers/rx-request. */
var RxRequest = (function () {
    function RxRequest(options) {
        var headers = __assign({}, options.headers, { 'Content-Type': 'application/json' });
        this.req = axios_1.default.create(__assign({}, options, { headers: headers }));
        this.get = this.toObservable(this.req.get);
        this.post = this.toObservable(this.req.post);
        this.put = this.toObservable(this.req.put);
    }
    RxRequest.prototype.toObservable = function (method) {
        return function (url, options) {
            return Observable_1.Observable.create(function (observer) {
                method(url, options)
                    .then(function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        observer.error(__assign({}, res.data));
                    }
                    else {
                        observer.next(res.data);
                        observer.complete();
                    }
                })
                    .catch(function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        };
    };
    return RxRequest;
}());
exports.RxRequest = RxRequest;
//# sourceMappingURL=RxRequest.js.map