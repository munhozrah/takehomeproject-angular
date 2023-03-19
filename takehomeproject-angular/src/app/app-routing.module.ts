import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { CourseResolverResolver } from './resolvers/course-resolver.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent, resolve: {'courses': () => inject(CourseResolverResolver).resolve()} },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: '**',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
