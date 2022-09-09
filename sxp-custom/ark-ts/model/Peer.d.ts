/** Peer model. */
export declare class Peer {
    ip: string;
    port: number;
    version?: string;
    os?: string;
    height?: number;
    status?: string;
    delay?: number;
    constructor();
}
export declare class PeerQueryParams {
    status?: string;
    os?: string;
    shared?: string;
    version?: string;
    limit?: number;
    orderBy?: string;
    offset?: number;
    ip?: string;
    port?: number;
}
export declare class PeerResponse {
    success: boolean;
    peers: Peer[];
    peer: Peer;
    constructor();
}
export declare class PeerVersionResponse {
    success: boolean;
    version: string;
    build: string;
    constructor();
}
export declare class PeerVersion2ConfigDataResponse {
    version: string;
    network?: object;
    plugins?: object;
    constructor();
}
export declare class PeerVersion2ConfigResponse {
    data: PeerVersion2ConfigDataResponse;
    constructor();
}
