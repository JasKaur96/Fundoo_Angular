import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api';
  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: localStorage.getItem('accessToken') || '',
  });

  constructor(private http: HttpClient) {}

  postService(url: string, reqData: any) {
    return this.http.post(this.baseUrl + url, reqData, {
      headers: this.headers,
    });
  }
}
