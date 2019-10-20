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
  LoadCourseList = '[Course] Load Course List',
  GetCourseList = '[Course] Get Course List',
  LoadCourseData = '[Course] Load Course Data',
  GetCourseData = '[Course] Get Course Data',
  LoadCountries = '[Course] Load Countries',
  GetCountries = '[Course] Get Countries',
  LoadDistricts = '[Course] Load Districts',
  GetDistricts = '[Course] Get Districts',
  LoadApplicants = '[Course] Load Applicants',
  GetApplicants = '[Course] Get Applicants',
  SaveApplication = '[Course] Save Application Master File',
  SaveApplicationSuccess = '[Course] Save Application Success',
  SaveApplicationFailed = '[Course] Save Application Failed',
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

export class LoadCourseList implements Action {
  readonly type = CourseActionTypes.LoadCourseList;
}

export class GetCourseList implements Action {
  readonly type = CourseActionTypes.GetCourseList;
  constructor(public payload) { }
}

export class LoadCourseData implements Action {
  readonly type = CourseActionTypes.LoadCourseData;
  constructor(public payload) { }
}

export class GetCourseData implements Action {
  readonly type = CourseActionTypes.GetCourseData;
  constructor(public payload) { }
}

export class LoadCountries implements Action {
  readonly type = CourseActionTypes.LoadCountries;
  constructor(public payload) { }
}

export class GetCountries implements Action {
  readonly type = CourseActionTypes.GetCountries;
  constructor(public payload) { }
}

export class LoadDistricts implements Action {
  readonly type = CourseActionTypes.LoadDistricts;
  constructor(public payload) { }
}

export class GetDistricts implements Action {
  readonly type = CourseActionTypes.GetDistricts;
  constructor(public payload) { }
}

export class LoadApplicants implements Action {
  readonly type = CourseActionTypes.LoadApplicants;
  constructor(public payload) { }
}

export class GetApplicants implements Action {
  readonly type = CourseActionTypes.GetApplicants;
  constructor(public payload) { }
}

export class SaveApplication implements Action {
  readonly type = CourseActionTypes.SaveApplication;
  constructor(public payload) { }
}

export class SaveApplicationSuccess implements Action {
  readonly type = CourseActionTypes.SaveApplicationSuccess;
  constructor(public payload) { }
}

export class SaveApplicationFailed implements Action {
  readonly type = CourseActionTypes.SaveApplicationFailed;
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
  | SaveApplicationMasterFileFailed
  | LoadCourseList
  | GetCourseList
  | LoadCourseData
  | GetCourseData
  | SaveApplication
  | SaveApplicationSuccess
  | SaveApplicationFailed
  | LoadCountries
  | GetCountries
  | LoadDistricts
  | GetDistricts
  | LoadApplicants
  | GetApplicants;
