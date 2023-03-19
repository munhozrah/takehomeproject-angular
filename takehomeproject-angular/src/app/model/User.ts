import { FormGroup } from "@angular/forms";

export class User {
    username: string;
    password: string;
    role: string;

    constructor(username: string, password: string, role: string) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    static fromForm(formLogin: FormGroup): User {
        return new User(formLogin.controls['username'].value, formLogin.controls['password'].value, '');
    }
}

