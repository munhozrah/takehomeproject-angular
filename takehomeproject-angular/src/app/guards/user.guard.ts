import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard {
  constructor(private userService: UserService, private router: Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.userService.loggedUser && this.userService.loggedUser.getValue().role === 'ADMIN')
        return true;
      this.router.navigate(['/login']);
      return false;
  }
}