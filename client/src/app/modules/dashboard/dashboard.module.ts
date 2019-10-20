import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { SharedModule } from '../shared/shared.module';
import { ApplyCourseComponent } from './apply-course/apply-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, AddCourseComponent, ApplyCourseComponent, ViewCourseComponent, ViewApplicantsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
