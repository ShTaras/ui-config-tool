import { Injectable } from '@angular/core';




@Injectable()
export class JwtService {

  storage: any = window.localStorage;

  readonly KEY: string = 'user-token';
  readonly KEYLifetime: string = 'user-token-exp';
  readonly FCM: string = 'token-fcm';

  constructor(
  ){}


  get token(): string {
    const expDate = new Date(this.storage.getItem(this.KEYLifetime));
    if (new Date() > expDate) {
      this.destroyToken()
      return null;
    }
    return this.storage.getItem(this.KEY);
  }
   setToken(response: any | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + 10800000);
      this.storage.setItem(this.KEY, response);
      this.storage.setItem(this.KEYLifetime, expDate.toString());
    } else {
      this.storage.clear();
    }
  }

  get tokenFCM(): string {
    return this.storage.getItem(this.FCM);
  }
  setTokenFCM(response: any) {
    if (response) {
      this.storage.setItem(this.FCM, response);
    }
  }

  destroyToken() {
    this.setToken(null);
  }








/*
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
*/
}
