"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var json_typescript_mapper_1 = require("json-typescript-mapper");
/** Peer model. */
var Peer = (function () {
    function Peer() {
        this.delay = void 0;
        this.height = void 0;
        this.ip = void 0;
        this.os = void 0;
        this.port = void 0;
        this.status = void 0;
        this.version = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('ip'),
        __metadata("design:type", String)
    ], Peer.prototype, "ip", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('port'),
        __metadata("design:type", Number)
    ], Peer.prototype, "port", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('version'),
        __metadata("design:type", String)
    ], Peer.prototype, "version", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('os'),
        __metadata("design:type", String)
    ], Peer.prototype, "os", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('height'),
        __metadata("design:type", Number)
    ], Peer.prototype, "height", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('status'),
        __metadata("design:type", String)
    ], Peer.prototype, "status", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('delay'),
        __metadata("design:type", Number)
    ], Peer.prototype, "delay", void 0);
    return Peer;
}());
exports.Peer = Peer;
var PeerQueryParams = (function () {
    function PeerQueryParams() {
    }
    return PeerQueryParams;
}());
exports.PeerQueryParams = PeerQueryParams;
var PeerResponse = (function () {
    function PeerResponse() {
        this.success = void 0;
        this.peers = void 0;
        this.peer = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('success'),
        __metadata("design:type", Boolean)
    ], PeerResponse.prototype, "success", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Peer, name: 'peers' }),
        __metadata("design:type", Array)
    ], PeerResponse.prototype, "peers", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Peer, name: 'peer' }),
        __metadata("design:type", Peer)
    ], PeerResponse.prototype, "peer", void 0);
    return PeerResponse;
}());
exports.PeerResponse = PeerResponse;
var PeerVersionResponse = (function () {
    function PeerVersionResponse() {
        this.success = void 0;
        this.version = void 0;
        this.build = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('success'),
        __metadata("design:type", Boolean)
    ], PeerVersionResponse.prototype, "success", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('version'),
        __metadata("design:type", String)
    ], PeerVersionResponse.prototype, "version", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('build'),
        __metadata("design:type", String)
    ], PeerVersionResponse.prototype, "build", void 0);
    return PeerVersionResponse;
}());
exports.PeerVersionResponse = PeerVersionResponse;
var genericConverter = {
    fromJson: function (data) {
        return data;
    },
    toJson: function (data) {
        return JSON.stringify(data);
    },
};
var PeerVersion2ConfigDataResponse = (function () {
    function PeerVersion2ConfigDataResponse() {
        this.version = void 0;
        this.network = void 0;
        this.plugins = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('version'),
        __metadata("design:type", String)
    ], PeerVersion2ConfigDataResponse.prototype, "version", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ customConverter: genericConverter, name: 'network' }),
        __metadata("design:type", Object)
    ], PeerVersion2ConfigDataResponse.prototype, "network", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ customConverter: genericConverter, name: 'plugins' }),
        __metadata("design:type", Object)
    ], PeerVersion2ConfigDataResponse.prototype, "plugins", void 0);
    return PeerVersion2ConfigDataResponse;
}());
exports.PeerVersion2ConfigDataResponse = PeerVersion2ConfigDataResponse;
var PeerVersion2ConfigResponse = (function () {
    function PeerVersion2ConfigResponse() {
        this.data = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: PeerVersion2ConfigDataResponse, name: 'data' }),
        __metadata("design:type", PeerVersion2ConfigDataResponse)
    ], PeerVersion2ConfigResponse.prototype, "data", void 0);
    return PeerVersion2ConfigResponse;
}());
exports.PeerVersion2ConfigResponse = PeerVersion2ConfigResponse;
//# sourceMappingURL=Peer.js.map