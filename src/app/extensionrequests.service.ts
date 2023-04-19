import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Extensionrequests } from './extensionrequests';

@Injectable({
  providedIn: 'root'
})
export class ExtensionrequestsService {

  private baseUrl = "http://localhost:8081/api/emiextensions/newrequest";
  constructor(private httpClient: HttpClient) { }


  updateFormData(extensionrequest: Extensionrequests): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, extensionrequest);
  }
}
