import { SaveApplicationMasterFile, LoadCountries } from './../actions/course.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CourseService } from 'src/app/core/services/course.service';
import { switchMap, map } from 'rxjs/operators';

import * as courseActions from '../actions/course.actions';



@Injectable()
export class CourseEffects {

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) { }

  @Effect()
  LoadProgramList: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadProgramList),
    switchMap(() => {
      return this.courseService.getCourseList().pipe(
        map((courseList) => {
          return new courseActions.GetProgramList(courseList);
        }));
    })
  );

  @Effect()
  LoadScheduleList: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadScheduleList),
    switchMap(() => {
      return this.courseService.getScheduleList().pipe(
        map((scheduleList) => {
          return new courseActions.GetScheduleList(scheduleList);
        }));
    })
  );

  @Effect()
  LoadFieldList: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadFieldList),
    switchMap(() => {
      return this.courseService.getFieldList().pipe(
        map((fieldList) => {
          return new courseActions.GetFieldList(fieldList);
        }));
    })
  );

  @Effect()
  LoadCountries: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadCountries),
    switchMap(() => {
      return this.courseService.getCountries().pipe(
        map((fieldList) => {
          return new courseActions.GetCountries(fieldList);
        }));
    })
  );

  @Effect()
  LoadDistricts: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadDistricts),
    switchMap(() => {
      return this.courseService.getDistricts().pipe(
        map((fieldList) => {
          return new courseActions.GetDistricts(fieldList);
        }));
    })
  );

  @Effect()
  LoadCourseList: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadCourseList),
    switchMap(() => {
      return this.courseService.getCourseScheduleList().pipe(
        map((courseList) => {
          return new courseActions.GetCourseList(courseList);
        }));
    })
  );

  @Effect()
  LoadCourseData: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadCourseData),
    map((action: courseActions.LoadCourseData) => action.payload),
    switchMap((payload) => {
      return this.courseService.getCourseSchedule(payload).pipe(
        map((courseData) => {
          return new courseActions.GetCourseData(courseData);
        }));
    })
  );

  @Effect()
  LoadApplicants: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.LoadApplicants),
    map((action: courseActions.LoadApplicants) => action.payload),
    switchMap((payload) => {
      return this.courseService.getApplicantList(payload).pipe(
        map((courseData) => {
          return new courseActions.GetApplicants(courseData);
        }));
    })
  );

  @Effect()
  SaveMasterFile: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.SaveApplicationMasterFile),
    map((action: courseActions.SaveApplicationMasterFile) => action.payload),
    switchMap((payload) => {
      return this.courseService.createMasterFile(payload).pipe(
        map((reponse) => {
          return new courseActions.GetFieldList(reponse);
        }));
    })
  );

  @Effect()
  SaveApplication: Observable<any> = this.actions$.pipe(
    ofType(courseActions.CourseActionTypes.SaveApplication),
    map((action: courseActions.SaveApplication) => action.payload),
    switchMap((payload) => {
      return this.courseService.saveApplication(payload).pipe(
        map((reponse) => {
          return new courseActions.SaveApplicationSuccess(reponse);
        }));
    })
  );

}
