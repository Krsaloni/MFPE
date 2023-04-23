import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseURL = "http://localhost:8082/api";

  constructor(private httpClient: HttpClient) { }

  getRequestList(): Observable<Request[]> {
    console.log('@@@@@@@@');
    return this.httpClient.get<Request[]>(`${this.baseURL}/emiextensions`);
  }
  createRequest(request: Request): Observable<Object> {
    console.log('######');
    console.log('$$$$$$', request);

    return this.httpClient.post(`${this.baseURL}/emiextensions/newrequest`, request);
  }

  getRequestById(requestId: number): Observable<Request> {
    return this.httpClient.get<Request>(`${this.baseURL}/emiextensions/${requestId}`)
  }
}
