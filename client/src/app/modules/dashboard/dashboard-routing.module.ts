import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ApplyCourseComponent } from './apply-course/apply-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'add_course',
        component: AddCourseComponent
      },
      {
        path: 'view_course',
        component: ViewCourseComponent
      },
      {
        path: 'register/:id',
        component: ApplyCourseComponent
      },
      {
        path: 'view_applicants/:id',
        component: ViewApplicantsComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
