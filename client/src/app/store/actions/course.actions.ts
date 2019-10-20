import { Action } from '@ngrx/store';

export enum CourseActionTypes {
  LoadCourses = '[Course] Load Courses',
  LoadProgramList = '[Course] Load Program List',
  GetProgramList = '[Course] Get Program List',
  LoadScheduleList = '[Course] Load Schedule List',
  GetScheduleList = '[Course] Get Schedule List',
  LoadFieldList = '[Course] Load Field List',
  GetFieldList = '[Course] Get Field List',
  SaveApplicationMasterFile = '[Course] Save Application Master File',
  SaveApplicationMasterFileSuccess = '[Course] Save Application Master File Success',
  SaveApplicationMasterFileFailed = '[Course] Save Application Master File Failed',
}

export class LoadCourses implements Action {
  readonly type = CourseActionTypes.LoadCourses;
}

export class LoadProgramList implements Action {
  readonly type = CourseActionTypes.LoadProgramList;
}

export class GetProgramList implements Action {
  readonly type = CourseActionTypes.GetProgramList;
  constructor(public payload) { }
}

export class LoadScheduleList implements Action {
  readonly type = CourseActionTypes.LoadScheduleList;
}

export class GetScheduleList implements Action {
  readonly type = CourseActionTypes.GetScheduleList;
  constructor(public payload) { }
}

export class LoadFieldList implements Action {
  readonly type = CourseActionTypes.LoadFieldList;
}

export class GetFieldList implements Action {
  readonly type = CourseActionTypes.GetFieldList;
  constructor(public payload) { }
}

export class SaveApplicationMasterFile implements Action {
  readonly type = CourseActionTypes.SaveApplicationMasterFile;
  constructor(public payload) { }
}

export class SaveApplicationMasterFileSuccess implements Action {
  readonly type = CourseActionTypes.SaveApplicationMasterFileSuccess;
  constructor(public payload) { }
}

export class SaveApplicationMasterFileFailed implements Action {
  readonly type = CourseActionTypes.SaveApplicationMasterFileFailed;
  constructor(public payload) { }
}

export type CourseActions = LoadCourses
  | LoadProgramList
  | GetProgramList
  | LoadScheduleList
  | GetScheduleList
  | LoadFieldList
  | GetFieldList
  | SaveApplicationMasterFile
  | SaveApplicationMasterFileSuccess
  | SaveApplicationMasterFileFailed;
