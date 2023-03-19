import { FormGroup } from "@angular/forms";

export class Course {
    id: string;
    courseName: string;

    constructor(id: string, courseName: string) {
        this.id = id;
        this.courseName = courseName;
    }

    static fromForm(formCourse: FormGroup): Course {
        return new Course(formCourse.controls['id'].value, formCourse.controls['courseName'].value);
    }
}