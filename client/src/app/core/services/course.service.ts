import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourseList() {
    return this.http.get<any>(`${environment.apiUrl}/program`)
      .pipe(map(courseList => {
        return courseList;
      }));
  }

  getScheduleList() {
    return this.http.get<any>(`${environment.apiUrl}/academic_schedule`)
      .pipe(map(scheduleList => {
        return scheduleList;
      }));
  }

  getFieldList() {
    return this.http.get<any>(`${environment.apiUrl}/application_field`)
      .pipe(map(fieldList => {
        return fieldList;
      }));
  }

  getCourseScheduleList() {
    return this.http.get<any>(`${environment.apiUrl}/master_application`)
      .pipe(map(courseList => {
        return courseList;
      }));
  }

  getCourseSchedule(id) {
    return this.http.get<any>(`${environment.apiUrl}/master_application/${id}`)
      .pipe(map(courseData => {
        return courseData;
      }));
  }

  getApplicantList(id) {
    return this.http.get<any>(`${environment.apiUrl}/application/${id}`)
      .pipe(map(applicantData => {
        return applicantData;
      }));
  }

  getCountries() {
    return this.http.get<any>(`${environment.apiUrl}/countries`)
      .pipe(map(courseData => {
        return courseData;
      }));
  }

  getDistricts() {
    return this.http.get<any>(`${environment.apiUrl}/districts`)
      .pipe(map(courseData => {
        return courseData;
      }));
  }

  createMasterFile(data) {
    return this.http.post<any>(`${environment.apiUrl}/master_application`, data)
      .pipe(map(response => {
        return response;
      }));
  }

  saveApplication(data, ) {
    return this.http.post<any>(`${environment.apiUrl}/application`, data)
      .pipe(map(response => {
        return response;
      }));
  }
}
