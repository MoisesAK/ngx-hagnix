import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Config} from "./config";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(identifier: string, password: string) {
        return this.http.post<any>(`${Config.urlBase}/api/auth`, { identifier, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    async logout(): Promise<void> {
        // remove user from local storage to log user out
      await this.http.post<any>(`${Config.urlBase}/api/auth/revoke`, {}).toPromise();
      localStorage.removeItem('currentUser');
    }

  async generateToken(): Promise<boolean> {
      try {
        const token: any = await this.http.get(`${Config.urlBase}/api/auth/token`).toPromise();
        localStorage.setItem('currentUser', token.token);

        return true;
      }catch (e) {
        await this.logout();
        return false;
      }
  }
}
