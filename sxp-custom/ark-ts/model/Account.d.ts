import { Delegate } from './Delegate';
/** Account model. */
export declare class Account {
    address: string;
    unconfirmedBalance: string;
    balance: string;
    publicKey: string;
    unconfirmedSignature: number;
    secondSignature: number;
    secondPublicKey: string;
    multiSignatures: object[];
    uMultiSignatures: object[];
    constructor();
}
export declare class AccountResponse {
    success: boolean;
    account?: Account;
    publicKey?: string;
    constructor();
}
export declare class AccountBalanceResponse {
    success: boolean;
    balance: string;
    unconfirmedBalance: string;
    constructor();
}
export declare class AccountVotesResponse {
    success: boolean;
    delegates: Delegate[];
    constructor();
}
export declare class AccountQueryParams {
    address: string;
}
