"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var json_typescript_mapper_1 = require("json-typescript-mapper");
var model = require("../model/Transaction");
var Key_1 = require("../core/Key");
var Tx_1 = require("../core/Tx");
/** Transaction related API calls. */
var TransactionApi = (function () {
    function TransactionApi(http) {
        this.http = http;
    }
    /**
     * Transaction used to transfer amounts to specific address.
     */
    TransactionApi.prototype.createTransaction = function (params) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            if (!Key_1.PublicKey.validateAddress(params.recipientId, _this.http.network)) {
                observer.error('Wrong recipientId');
            }
            if (!params.fee) {
                return observer.error('Missing "send" transaction fee');
            }
            var data = {
                amount: params.amount,
                fee: params.fee,
                recipientId: params.recipientId,
                timestamp: params.timestamp,
                type: model.TransactionType.SendArk,
                vendorField: params.vendorField,
            };
            var tx = new Tx_1.default(data, _this.http.network, params.passphrase, params.secondPassphrase);
            data = tx.generate();
            var typedTx = json_typescript_mapper_1.deserialize(model.Transaction, data);
            observer.next(typedTx);
            observer.complete();
        });
    };
    /**
     * Transaction used to vote for a chosen Delegate.
     */
    TransactionApi.prototype.createVote = function (params) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            if (!params.fee) {
                return observer.error('Missing "vote" transaction fee');
            }
            var updown = model.VoteType[params.type] === 'Add' ? '+' : '-';
            var data = {
                asset: {
                    votes: [updown + params.delegatePublicKey],
                },
                fee: params.fee,
                type: model.TransactionType.Vote,
                vendorField: params.vendorField,
            };
            var tx = new Tx_1.default(data, _this.http.network, params.passphrase, params.secondPassphrase);
            tx.setAddress();
            data = tx.generate();
            var typedTx = json_typescript_mapper_1.deserialize(model.Transaction, data);
            typedTx.asset = data.asset;
            observer.next(typedTx);
            observer.complete();
        });
    };
    /**
     * Transaction used to register as a Delegate.
     */
    TransactionApi.prototype.createDelegate = function (params) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            if (params.username.length > 20) {
                observer.error('Delegate name is too long, 20 characters maximum');
            }
            if (!params.fee) {
                return observer.error('Missing "delegate" transaction fee');
            }
            var data = {
                asset: {
                    delegate: {
                        publicKey: params.publicKey,
                        username: params.username,
                    },
                },
                fee: params.fee,
                type: model.TransactionType.CreateDelegate,
                vendorField: params.vendorField,
            };
            var tx = new Tx_1.default(data, _this.http.network, params.passphrase, params.secondPassphrase);
            data = tx.generate();
            var typedTx = json_typescript_mapper_1.deserialize(model.Transaction, data);
            typedTx.asset = data.asset;
            observer.next(typedTx);
            observer.complete();
        });
    };
    /**
     * Transaction used to create second passphrase.
     */
    TransactionApi.prototype.createSignature = function (passphrase, secondPassphrase, vendorField, fee) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            if (!fee) {
                return observer.error('Missing "secondsignature" transaction fee');
            }
            var data = {};
            data.asset = {};
            data.fee = fee;
            data.type = model.TransactionType.SecondSignature;
            data.vendorField = vendorField;
            var tx = new Tx_1.default(data, _this.http.network, passphrase, secondPassphrase);
            tx.setAssetSignature();
            data = tx.generate();
            var typedTx = json_typescript_mapper_1.deserialize(model.Transaction, data);
            typedTx.asset = tx.transaction.asset;
            observer.next(typedTx);
            observer.complete();
        });
    };
    /**
     * Post transaction to broadcast
     */
    TransactionApi.prototype.post = function (transaction, peer) {
        var params = { transactions: [transaction] };
        var host = peer ? peer.ip : this.http.network.activePeer.ip;
        var endpoint = '/peer/transactions';
        var port = peer ? peer.port : this.http.network.activePeer.port;
        var options = {};
        if (this.http.network.isV2) {
            endpoint = '/api/transactions';
            options = {
                headers: {
                    'api-version': 2
                },
            };
        }
        else {
            options = {
                headers: {
                    nethash: this.http.network.nethash,
                    port: port,
                    version: this.http.network.p2pVersion || '',
                },
            };
        }
        var url = "http://" + host + ":" + port + endpoint;
        return this.http.postNative(url, params, model.TransactionPostResponse, options);
    };
    /**
     * Transaction matched by id.
     */
    TransactionApi.prototype.get = function (id) {
        var params = { id: id };
        return this.http.get('/transactions/get', params, model.TransactionResponse);
    };
    /**
     * Get unconfirmed transaction by id.
     */
    TransactionApi.prototype.getUnconfirmed = function (id) {
        var params = { id: id };
        return this.http.get('/transactions/unconfirmed/get', params, model.TransactionResponse);
    };
    /**
     * Transactions list matched by provided parameters.
     */
    TransactionApi.prototype.list = function (params) {
        return this.http.get('/transactions', params, model.TransactionResponse);
    };
    /**
     * Transactions unconfirmed list matched by provided parameters.
     */
    TransactionApi.prototype.listUnconfirmed = function (params) {
        return this.http.get('/transactions/unconfirmed', params, model.TransactionResponse);
    };
    return TransactionApi;
}());
exports.default = TransactionApi;
//# sourceMappingURL=TransactionApi.js.map