"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/observable/empty");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
var model = require("../model");
var Http_1 = require("../services/Http");
var LoaderApi_1 = require("./LoaderApi");
var config_1 = require("../config");
/** Peer related API calls. */
var PeerApi = (function () {
    function PeerApi(http) {
        this.http = http;
    }
    /**
     * Find good peer ordered by synchronized blocks.
     */
    PeerApi.findGoodPeer = function (network, http) {
        if (http === undefined) {
            http = new Http_1.default(network);
        }
        return Observable_1.Observable.create(function (observer) {
            var networkType = model.NetworkType[http.network.type].toLowerCase();
            var peersList = config_1.default.networks[networkType].peers;
            var loader = new LoaderApi_1.default(http);
            var blockList = [];
            var completed = false;
            peersList.forEach(function (element, index) {
                loader
                    .synchronisationStatus("http://" + element)
                    .subscribe(function (status) {
                    blockList.push([element, status.blocks]);
                    // when find a good peer or at the end
                    if (!completed && (status.blocks <= 0 || peersList.length - 1 === index)) {
                        completed = true;
                        blockList.sort(function (a, b) { return a[1] > b[1] ? 1 : -1; }); // sort by better to the worst
                        var host = blockList[0][0].split(':');
                        var peer = new model.Peer;
                        peer.ip = host[0];
                        peer.port = host[1];
                        observer.next(peer);
                        observer.complete();
                    }
                }, function (e) { return Observable_1.Observable.empty(); });
            });
        });
    };
    /**
     * Get peer by ip and port.
     */
    PeerApi.prototype.get = function (ip, port) {
        var params = { ip: ip, port: port };
        return this.http.get('/peers/get', params, model.PeerResponse);
    };
    /**
     * Get peers list by parameters.
     */
    PeerApi.prototype.list = function (params) {
        return this.http.get('/peers', params, model.PeerResponse);
    };
    /**
     * Find good peer ordered by synchronized blocks.
     */
    PeerApi.prototype.findGoodPeer = function () {
        return PeerApi.findGoodPeer(this.http.network, this.http);
    };
    /**
     * Get peer version
     */
    PeerApi.prototype.version = function (params) {
        return this.http.get('/peers/version', params, model.PeerVersionResponse);
    };
    /**
     * Get config for version 2 peers.
     */
    PeerApi.prototype.getVersion2Config = function (ip, p2pPort) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.http.getNative("http://" + ip + ":4040/config", null, model.PeerVersion2ConfigResponse).subscribe(function (response) {
                observer.next(response);
                observer.complete();
            }, function () {
                _this.http.getNative("http://" + ip + ":" + p2pPort + "/config", null, model.PeerVersion2ConfigResponse).subscribe(function (response) {
                    observer.next(response);
                    observer.complete();
                }, function (e) {
                    observer.error(e);
                });
            });
        });
    };
    return PeerApi;
}());
exports.default = PeerApi;
//# sourceMappingURL=PeerApi.js.map