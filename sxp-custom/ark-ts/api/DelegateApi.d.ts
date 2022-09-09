import { Observable } from 'rxjs/Observable';
import * as model from '../model/Delegate';
import Http from '../services/Http';
/** Delegate related API calls. */
export default class DelegateApi {
    private http;
    constructor(http: Http);
    /**
     * Get delegate by username.
     */
    get(params: model.DelegateQueryParams): Observable<model.DelegateResponse>;
    /**
     * Get delegates list.
     */
    list(params?: model.DelegateQueryParams): Observable<model.DelegateResponse>;
    /**
     * Get voters of delegate.
     */
    voters(params: model.DelegateQueryParams): Observable<model.DelegateVoters>;
    /**
     * Get forged data of delegate.
     */
    forgedData(params: model.DelegateQueryParams): Observable<model.ForgedDetails>;
    /**
     * Search delegates
     */
    search(params: model.DelegateQueryParams): Observable<model.DelegateResponse>;
}
