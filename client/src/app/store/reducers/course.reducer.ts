import * as courseActions from './../actions/course.actions';

export const courseFeatureKey = 'course';

export interface State {
  courseList: object;
  scheduleList: object;
  fieldList: object;
  courseScheduleList: object;
  selectedCourse: object;
  countries: object;
  districts: object;
  applications: object;
  selectedApplication: object;
}

export const initialState: State = {
  courseList: null,
  scheduleList: null,
  fieldList: null,
  courseScheduleList: null,
  selectedCourse: null,
  countries: null,
  districts: null,
  applications: null,
  selectedApplication: null
};

export function reducer(state = initialState, action: courseActions.CourseActions): State {
  switch (action.type) {
    case courseActions.CourseActionTypes.GetProgramList:
      return {
        ...state,
        courseList: action.payload
      };
    case courseActions.CourseActionTypes.GetScheduleList:
      return {
        ...state,
        scheduleList: action.payload
      };

    case courseActions.CourseActionTypes.GetFieldList:
      return {
        ...state,
        fieldList: action.payload
      };

    case courseActions.CourseActionTypes.GetCourseList:
      return {
        ...state,
        courseScheduleList: action.payload
      };

    case courseActions.CourseActionTypes.GetCourseData:
      return {
        ...state,
        selectedCourse: action.payload
      };

    case courseActions.CourseActionTypes.GetCountries:
      return {
        ...state,
        countries: action.payload
      };

    case courseActions.CourseActionTypes.GetDistricts:
      return {
        ...state,
        districts: action.payload
      };

    case courseActions.CourseActionTypes.GetApplicants:
      return {
        ...state,
        applications: action.payload
      };

    default:
      return state;
  }
}
