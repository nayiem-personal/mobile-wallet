import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as model from '../model';
/** Http calls from peer url. */
export default class Http {
    network: model.Network;
    private baseRequest;
    private timeout;
    constructor(network?: model.Network);
    getNative<T>(url: string, params?: any, responseType?: new () => T): Observable<T>;
    get<T>(url: string, params?: any, responseType?: new () => T): Observable<T>;
    post<T>(url: string, body: any, responseType?: new () => T): Observable<T>;
    postNative<T>(url: string, body: any, responseType?: new () => T, options?: any): Observable<T>;
    put(url: string, data: any): any;
    /**
     * Convert JSON response to specific interface.
     */
    private formatResponse(response, responseType);
    /**
     * Convert property from interface to JSON
     */
    private formatParams(params);
}
