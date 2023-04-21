import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseURL = "localhost:8082/api/emiextensions";

  constructor(private httpClient: HttpClient) { }
  getRequestList(): Observable<Request[]> {
    return this.httpClient.get<Request[]>(`${this.baseURL}`);
  }
  createRequest(request: Request): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, request);
  }
}
