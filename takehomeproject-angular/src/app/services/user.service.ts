import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseURL = "http://localhost:8080";
  public loggedUser!: BehaviorSubject<User>;

  next(user: User) {
    if (!this.loggedUser)
      this.loggedUser = new BehaviorSubject<User>(user);
    else
      this.loggedUser.next(user);
  }

  constructor(private http: HttpClient) { }
  
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/user/login`, user);
  }
}