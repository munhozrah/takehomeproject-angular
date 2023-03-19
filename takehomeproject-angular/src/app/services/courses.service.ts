import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  readonly baseURL = "http://localhost:8080";

  constructor(private http: HttpClient) { }
  
  listAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/courses`);
  }

  save(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseURL}/courses`, course);
  } 
}
