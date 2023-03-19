import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Course } from 'src/app/model/Course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course!: Course;
  formCourse!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private courseService: CoursesService) {}
  
  ngOnInit(): void {
    const state = history.state;
    this.course = new Course(state.id, state.courseName);
    this.formCourse = this.createFormFromCourse();
  }

  async onSubmit(): Promise<void> {
    this.course = Course.fromForm(this.formCourse);
    await lastValueFrom(this.courseService.save(this.course))
    .then((course: Course) => {
      this.course = course;
      this.formCourse = this.createFormFromCourse();
    })
    .catch((error: HttpErrorResponse) => {
      alert(`${error.status}: ${error.error}`);
    });
  }

  createFormFromCourse(): FormGroup {
    return this.formBuilder.group({
      id: [{value: this.course.id, disabled: true}],
      courseName: [this.course.courseName, Validators.required]
    });

  }
}