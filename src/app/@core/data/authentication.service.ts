import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Config} from "./config";
import {User} from "./models/user";
import * as jwt_decode from "jwt-decode"

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    private user: User;
    private resolve: any;

    login(identifier: string, password: string) {
        this.logout();
        return this.http.post<any>(`${Config.urlBase}/api/auth`, { identifier, password }, { withCredentials: true})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.user = jwt_decode(user.token);
                    this.resolve(user);
                }

                return user;
            }));
    }

    async logout() {
        // remove user from local storage to log user out
      this.http.post<any>(`${Config.urlBase}/api/auth/revoke`, {}, {withCredentials: true});
      localStorage.removeItem('currentUser');
      delete this.user;
    }

  async generateToken(): Promise<boolean> {
      try {
        const identifier = JSON.parse(localStorage.getItem('currentUser')).identifier;
        const token: any = await this.http.post(`${Config.urlBase}/api/auth/token`, { identifier },{ withCredentials: true }).toPromise();
        localStorage.setItem('currentUser', token.token);

        return true;
      }catch (e) {
        await this.logout();
        return false;
      }
  }

  getUser(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const local = localStorage.getItem('currentUser');
      if(local){
        const user = JSON.parse(local);

        this.user = jwt_decode(user.token);
        resolve(user);
        return;
      }

      if(!this.user)
        this.resolve = resolve;
      else
        resolve(this.user);
    })
  }
}
