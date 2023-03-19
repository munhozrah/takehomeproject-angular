import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';
import { CoursesService } from '../services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverResolver {
  constructor(private coursesService: CoursesService){}
  resolve(): Observable<Course[]> {
    return this.coursesService.listAll();
  }
}