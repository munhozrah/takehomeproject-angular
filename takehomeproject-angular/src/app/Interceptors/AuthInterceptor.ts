import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.userService.loggedUser;
        if (!user)
            return next.handle(request);
        const authdata = window.btoa(user.username + ':' + user.password);
            request = request.clone({
                setHeaders: { Authorization: `Basic ${authdata}` }
            });

        return next.handle(request);
    }
}