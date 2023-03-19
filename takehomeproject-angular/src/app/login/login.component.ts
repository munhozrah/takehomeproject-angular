import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  user!: User;

  constructor (private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    if (this.userService.loggedUser)
      this.router.navigateByUrl("/courses");
  }
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    this.user = User.fromForm(this.formLogin);
    await lastValueFrom(this.userService.login(this.user))
      .then((data: User) => {
        this.userService.loggedUser = data;
        this.userService.loggedUser.password = this.user.password; //not the ideal... Use JWT tokens instead
        this.user = data;
        this.router.navigateByUrl("/courses")
      })
      .catch((error: HttpErrorResponse) => {
        alert(`${error.status}: ${error.error}`);
      });
  }
}
