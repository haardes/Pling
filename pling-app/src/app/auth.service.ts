import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private REGISTER_URL = 'https://pling-258309.appspot.com/api/register';
  private LOGIN_URL = 'https://pling-258309.appspot.com/api/login';
  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post<any>(this.REGISTER_URL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.LOGIN_URL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
