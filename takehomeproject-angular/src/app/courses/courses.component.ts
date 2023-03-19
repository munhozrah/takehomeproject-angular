import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Course } from '../model/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {
  coursesDataSource = new MatTableDataSource<Course[]>();
  readonly columnsToDisplay = new Array('id', 'courseName');
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
      this.activatedRoute.data.subscribe(({ courses }) => {
        this.coursesDataSource.data = courses;
      })
  }

  ngAfterViewInit() {
    this.coursesDataSource.paginator = this.paginator;
  }

  selectRow(course: any): void {
    this.router.navigateByUrl('/course/detail', { state: course });
  }
}