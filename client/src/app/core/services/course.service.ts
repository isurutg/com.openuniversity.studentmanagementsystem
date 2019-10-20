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
    return this.http.get<any>(`${environment.apiUrl}/program/get_all`)
      .pipe(map(courseList => {
        return courseList;
      }));
  }

  getScheduleList() {
    return this.http.get<any>(`${environment.apiUrl}/academic_schedule/get_all`)
      .pipe(map(scheduleList => {
        return scheduleList;
      }));
  }

  getFieldList() {
    return this.http.get<any>(`${environment.apiUrl}/application_filed/get_all`)
      .pipe(map(fieldList => {
        return fieldList;
      }));
  }

  createMasterFile(data) {
    return this.http.post<any>(`${environment.apiUrl}/master_application`, data)
      .pipe(map(response => {
        return response;
      }));
  }
}
