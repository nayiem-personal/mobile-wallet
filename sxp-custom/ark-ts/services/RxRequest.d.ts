/** Based on @waldojeffers/rx-request. */
export declare class RxRequest {
    private req;
    get: any;
    post: any;
    put: any;
    constructor(options: any);
    private toObservable(method);
}
