import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem('auth-token');
    window.sessionStorage.setItem('auth-token', token);
  }

  // get token as a string
  public getToken(): string {
    return sessionStorage.getItem('auth-token');
  }

  public saveUser(user : User) {
    window.sessionStorage.removeItem('auth-user');
    window.sessionStorage.setItem('auth-user', JSON.stringify(user));
  }

  // get an object with an attribute "token"
  public getUser() {
    return JSON.parse(sessionStorage.getItem('auth-user'));
  }
}