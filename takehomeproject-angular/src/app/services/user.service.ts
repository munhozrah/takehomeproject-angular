import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseURL = "http://localhost:8080";
  public loggedUser!: User;

  constructor(private http: HttpClient) { }
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseURL}/user/login`, user);
  }
}