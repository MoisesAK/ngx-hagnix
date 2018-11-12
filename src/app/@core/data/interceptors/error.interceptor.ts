import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from '../authentication.service';
import {Router, RouterState} from "@angular/router";


@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private client: HttpClient,
                private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // @ts-ignore
      return next.handle(request).pipe(catchError(err => {

            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout()
                  .then(e => this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url }}))
                  .catch(e => this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url }}));
            }

            if (err.status === 400 && err.error === 'Invalid token!') {
              this.authenticationService.generateToken()
                .then(e => {
                  if (e)
                    this.client.request(request.clone());
                  else
                    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url }})
              });

              return
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
