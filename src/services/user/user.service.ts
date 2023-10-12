import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  signup(data: {}) {
    return this.httpService.postService('/user/userSignUp', data);
  }

  login(data: {}) {
    const res = this.httpService.postService('/user/login', data);
    return res;
  }
}
