import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.userService.loggedUser)
            return next.handle(request);
        const user = this.userService.loggedUser.value;
        if (!user.username || !user.password)
            return next.handle(request);
        const authdata = window.btoa(user.username + ':' + user.password);
        request = request.clone({
            setHeaders: { Authorization: `Basic ${authdata}` }
        });

        return next.handle(request);
    }
}