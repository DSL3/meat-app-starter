import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LoginService} from './login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService);
        if (loginService.isLoggedin()) {
            const authRequest = request.clone(
                {setHeaders: {'Authorization': `Beer ${loginService.user.accessToken}`} });
            return next.handle(authRequest)
        } else {
             // console.log('intercepting', request);
             return next.handle(request);
        }
         /*
             let headers = new HttpHeaders();

            if (this.loginService.isLoggedin()) {
                headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}` );
            }
        */

        
    }
}
