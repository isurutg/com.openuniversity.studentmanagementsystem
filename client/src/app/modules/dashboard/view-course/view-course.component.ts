import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';

import * as fromRoot from '../../../store/reducers/index';
import * as courseActions from '../../../store/actions/course.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  courseList$: Observable<object>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new courseActions.LoadCourseList());

    this.courseList$ = this.store.select(state => state.course.courseScheduleList);
  }


}
