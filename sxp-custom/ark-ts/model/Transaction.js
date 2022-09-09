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
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["SendArk"] = 0] = "SendArk";
    TransactionType[TransactionType["SecondSignature"] = 1] = "SecondSignature";
    TransactionType[TransactionType["CreateDelegate"] = 2] = "CreateDelegate";
    TransactionType[TransactionType["Vote"] = 3] = "Vote";
    TransactionType[TransactionType["MultiSignature"] = 4] = "MultiSignature";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var genericConverter = {
    fromJson: function (data) {
        return data;
    },
    toJson: function (data) {
        return JSON.stringify(data);
    },
};
/** Transaction model. */
var Transaction = (function () {
    function Transaction() {
        this.amount = void 0;
        this.asset = void 0;
        this.blockId = void 0;
        this.confirmations = void 0;
        this.fee = void 0;
        this.height = void 0;
        this.id = void 0;
        this.recipientId = void 0;
        this.requesterPublicKey = void 0;
        this.secondSenderPublicKey = void 0;
        this.senderId = void 0;
        this.senderPublicKey = void 0;
        this.signature = void 0;
        this.signSignature = void 0;
        this.timestamp = void 0;
        this.type = void 0;
        this.vendorField = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('id'),
        __metadata("design:type", String)
    ], Transaction.prototype, "id", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('timestamp'),
        __metadata("design:type", Number)
    ], Transaction.prototype, "timestamp", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('recipientId'),
        __metadata("design:type", String)
    ], Transaction.prototype, "recipientId", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('amount'),
        __metadata("design:type", Number)
    ], Transaction.prototype, "amount", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ customConverter: genericConverter, name: 'asset' }),
        __metadata("design:type", Object)
    ], Transaction.prototype, "asset", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('fee'),
        __metadata("design:type", Number)
    ], Transaction.prototype, "fee", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('type'),
        __metadata("design:type", Number)
    ], Transaction.prototype, "type", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('vendorField'),
        __metadata("design:type", String)
    ], Transaction.prototype, "vendorField", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('signature'),
        __metadata("design:type", String)
    ], Transaction.prototype, "signature", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('signSignature'),
        __metadata("design:type", String)
    ], Transaction.prototype, "signSignature", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('senderPublicKey'),
        __metadata("design:type", String)
    ], Transaction.prototype, "senderPublicKey", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('secondSenderPublicKey'),
        __metadata("design:type", String)
    ], Transaction.prototype, "secondSenderPublicKey", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('requesterPublicKey'),
        __metadata("design:type", String)
    ], Transaction.prototype, "requesterPublicKey", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('blockid'),
        __metadata("design:type", String)
    ], Transaction.prototype, "blockId", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('height'),
        __metadata("design:type", Number)
    ], Transaction.prototype, "height", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('senderId'),
        __metadata("design:type", String)
    ], Transaction.prototype, "senderId", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('confirmations'),
        __metadata("design:type", Number)
    ], Transaction.prototype, "confirmations", void 0);
    return Transaction;
}());
exports.Transaction = Transaction;
var TransactionQueryParams = (function () {
    function TransactionQueryParams() {
    }
    return TransactionQueryParams;
}());
exports.TransactionQueryParams = TransactionQueryParams;
var TransactionSend = (function () {
    function TransactionSend() {
        this.amount = void 0;
        this.fee = void 0;
        this.passphrase = void 0;
        this.publicKey = void 0;
        this.recipientId = void 0;
        this.secondPassphrase = void 0;
        this.vendorField = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('amount'),
        __metadata("design:type", Number)
    ], TransactionSend.prototype, "amount", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('fee'),
        __metadata("design:type", Number)
    ], TransactionSend.prototype, "fee", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('recipientId'),
        __metadata("design:type", String)
    ], TransactionSend.prototype, "recipientId", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('passphrase'),
        __metadata("design:type", Object)
    ], TransactionSend.prototype, "passphrase", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('publicKey'),
        __metadata("design:type", String)
    ], TransactionSend.prototype, "publicKey", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('secondPassphrase'),
        __metadata("design:type", Object)
    ], TransactionSend.prototype, "secondPassphrase", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('vendorField'),
        __metadata("design:type", String)
    ], TransactionSend.prototype, "vendorField", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('timestamp'),
        __metadata("design:type", Number)
    ], TransactionSend.prototype, "timestamp", void 0);
    return TransactionSend;
}());
exports.TransactionSend = TransactionSend;
var TransactionPostDataResponse = (function () {
    function TransactionPostDataResponse() {
        this.accept = void 0;
        this.excess = void 0;
        this.invalid = void 0;
        this.broadcast = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('accept'),
        __metadata("design:type", Array)
    ], TransactionPostDataResponse.prototype, "accept", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('excess'),
        __metadata("design:type", Array)
    ], TransactionPostDataResponse.prototype, "excess", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('invalid'),
        __metadata("design:type", Array)
    ], TransactionPostDataResponse.prototype, "invalid", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('broadcast'),
        __metadata("design:type", Array)
    ], TransactionPostDataResponse.prototype, "broadcast", void 0);
    return TransactionPostDataResponse;
}());
exports.TransactionPostDataResponse = TransactionPostDataResponse;
var TransactionPostResponse = (function () {
    function TransactionPostResponse() {
        this.success = void 0;
        this.transactionIds = void 0;
        this.data = void 0;
        this.error = void 0;
        this.errors = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('success'),
        __metadata("design:type", Boolean)
    ], TransactionPostResponse.prototype, "success", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('transactionIds'),
        __metadata("design:type", Array)
    ], TransactionPostResponse.prototype, "transactionIds", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: TransactionPostDataResponse, name: 'data' }),
        __metadata("design:type", TransactionPostDataResponse)
    ], TransactionPostResponse.prototype, "data", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('error'),
        __metadata("design:type", String)
    ], TransactionPostResponse.prototype, "error", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ customConverter: genericConverter, name: 'errors' }),
        __metadata("design:type", Object)
    ], TransactionPostResponse.prototype, "errors", void 0);
    return TransactionPostResponse;
}());
exports.TransactionPostResponse = TransactionPostResponse;
var TransactionResponse = (function () {
    function TransactionResponse() {
        this.success = void 0;
        this.transactions = void 0;
        this.transaction = void 0;
        this.count = void 0;
        this.error = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('success'),
        __metadata("design:type", Boolean)
    ], TransactionResponse.prototype, "success", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Transaction, name: 'transactions' }),
        __metadata("design:type", Array)
    ], TransactionResponse.prototype, "transactions", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Transaction, name: 'transaction' }),
        __metadata("design:type", Transaction)
    ], TransactionResponse.prototype, "transaction", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('count'),
        __metadata("design:type", String)
    ], TransactionResponse.prototype, "count", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('error'),
        __metadata("design:type", String)
    ], TransactionResponse.prototype, "error", void 0);
    return TransactionResponse;
}());
exports.TransactionResponse = TransactionResponse;
var TransactionPayload = (function () {
    function TransactionPayload() {
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty({ clazz: Transaction, name: 'transactions' }),
        __metadata("design:type", Array)
    ], TransactionPayload.prototype, "transactions", void 0);
    return TransactionPayload;
}());
exports.TransactionPayload = TransactionPayload;
var VoteType;
(function (VoteType) {
    VoteType[VoteType["Add"] = 0] = "Add";
    VoteType[VoteType["Remove"] = 1] = "Remove";
})(VoteType = exports.VoteType || (exports.VoteType = {}));
var TransactionVote = (function () {
    function TransactionVote() {
        this.type = void 0;
        this.fee = void 0;
        this.delegatePublicKey = void 0;
        this.passphrase = void 0;
        this.secondPassphrase = void 0;
        this.vendorField = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('type'),
        __metadata("design:type", Number)
    ], TransactionVote.prototype, "type", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('fee'),
        __metadata("design:type", Number)
    ], TransactionVote.prototype, "fee", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('delegatePublicKey'),
        __metadata("design:type", String)
    ], TransactionVote.prototype, "delegatePublicKey", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('passphrase'),
        __metadata("design:type", Object)
    ], TransactionVote.prototype, "passphrase", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('secondPassphrase'),
        __metadata("design:type", Object)
    ], TransactionVote.prototype, "secondPassphrase", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('vendorField'),
        __metadata("design:type", String)
    ], TransactionVote.prototype, "vendorField", void 0);
    return TransactionVote;
}());
exports.TransactionVote = TransactionVote;
var TransactionDelegate = (function () {
    function TransactionDelegate() {
        this.username = void 0;
        this.fee = void 0;
        this.publicKey = void 0;
        this.passphrase = void 0;
        this.secondPassphrase = void 0;
        this.vendorField = void 0;
    }
    __decorate([
        json_typescript_mapper_1.JsonProperty('username'),
        __metadata("design:type", String)
    ], TransactionDelegate.prototype, "username", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('fee'),
        __metadata("design:type", Number)
    ], TransactionDelegate.prototype, "fee", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('publicKey'),
        __metadata("design:type", String)
    ], TransactionDelegate.prototype, "publicKey", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('passphrase'),
        __metadata("design:type", Object)
    ], TransactionDelegate.prototype, "passphrase", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('secondPassphrase'),
        __metadata("design:type", Object)
    ], TransactionDelegate.prototype, "secondPassphrase", void 0);
    __decorate([
        json_typescript_mapper_1.JsonProperty('vendorField'),
        __metadata("design:type", String)
    ], TransactionDelegate.prototype, "vendorField", void 0);
    return TransactionDelegate;
}());
exports.TransactionDelegate = TransactionDelegate;
//# sourceMappingURL=Transaction.js.map