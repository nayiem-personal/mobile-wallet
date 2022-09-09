import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import * as model from '../model';
import Http from '../services/Http';
/** Peer related API calls. */
export default class PeerApi {
    private http;
    constructor(http: Http);
    /**
     * Find good peer ordered by synchronized blocks.
     */
    static findGoodPeer(network: model.Network, http?: Http): Observable<model.Peer>;
    /**
     * Get peer by ip and port.
     */
    get(ip: string, port: number): Observable<model.PeerResponse>;
    /**
     * Get peers list by parameters.
     */
    list(params?: model.PeerQueryParams): Observable<model.PeerResponse>;
    /**
     * Find good peer ordered by synchronized blocks.
     */
    findGoodPeer(): Observable<model.Peer>;
    /**
     * Get peer version
     */
    version(params?: model.PeerQueryParams): Observable<model.PeerVersionResponse>;
    /**
     * Get config for version 2 peers.
     */
    getVersion2Config(ip: string, p2pPort: number): Observable<model.PeerVersion2ConfigResponse>;
}
