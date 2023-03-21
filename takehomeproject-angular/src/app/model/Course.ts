import { FormGroup } from "@angular/forms";

export class Course {
    id: string;
    courseName: string;
    duration:  number;

    constructor(id: string, courseName: string, duration: number) {
        this.id = id;
        this.courseName = courseName;
        this.duration = duration;
    }

    static fromForm(formCourse: FormGroup): Course {
        return new Course(formCourse.controls['id'].value, formCourse.controls['courseName'].value, formCourse.controls['duration'].value);
    }
}