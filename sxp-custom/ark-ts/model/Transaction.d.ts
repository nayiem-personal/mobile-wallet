import { PrivateKey } from '../index';
export declare enum TransactionType {
    SendArk = 0,
    SecondSignature = 1,
    CreateDelegate = 2,
    Vote = 3,
    MultiSignature = 4,
}
/** Transaction model. */
export declare class Transaction {
    id?: string;
    timestamp?: number;
    recipientId?: string;
    amount?: number;
    asset?: object;
    fee?: number;
    type?: TransactionType;
    vendorField?: string;
    signature?: string;
    signSignature?: string;
    senderPublicKey?: string;
    secondSenderPublicKey?: string;
    requesterPublicKey?: string;
    blockId?: string;
    height?: number;
    senderId?: string;
    confirmations?: number;
    constructor();
}
export declare class TransactionQueryParams {
    id?: string;
    blockId?: string;
    senderId?: string;
    recipientId?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
    type?: TransactionType;
}
export declare class TransactionSend {
    amount: number;
    fee?: number;
    recipientId: string;
    passphrase: string | PrivateKey;
    publicKey?: string;
    secondPassphrase?: string | PrivateKey;
    vendorField?: string;
    timestamp?: number;
    constructor();
}
export declare class TransactionPostDataResponse {
    accept: string[];
    excess: string[];
    invalid: string[];
    broadcast: string[];
    constructor();
}
export declare class TransactionPostResponse {
    success: boolean;
    transactionIds: string[];
    data: TransactionPostDataResponse;
    error: string;
    errors: object;
    constructor();
}
export declare class TransactionResponse {
    success: boolean;
    transactions: Transaction[];
    transaction: Transaction;
    count: string;
    error: string;
    constructor();
}
export declare class TransactionPayload {
    transactions: Transaction[];
}
export declare enum VoteType {
    Add = 0,
    Remove = 1,
}
export declare class TransactionVote {
    type: VoteType;
    fee?: number;
    delegatePublicKey: string;
    passphrase: string | PrivateKey;
    secondPassphrase?: string | PrivateKey;
    vendorField?: string;
    constructor();
}
export declare class TransactionDelegate {
    username: string;
    fee?: number;
    publicKey: string;
    passphrase: string | PrivateKey;
    secondPassphrase?: string | PrivateKey;
    vendorField?: string;
    constructor();
}
