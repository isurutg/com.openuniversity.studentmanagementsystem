import * as courseActions from './../actions/course.actions';

export const courseFeatureKey = 'course';

export interface State {
  courseList: object;
  scheduleList: object;
  fieldList: object;
}

export const initialState: State = {
  courseList: null,
  scheduleList: null,
  fieldList: null,
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

    default:
      return state;
  }
}
