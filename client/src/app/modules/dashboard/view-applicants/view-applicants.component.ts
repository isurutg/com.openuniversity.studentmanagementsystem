import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from, Subscription } from 'rxjs';

import * as fromRoot from '../../../store/reducers/index';
import * as courseActions from '../../../store/actions/course.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.css']
})
export class ViewApplicantsComponent implements OnInit {
  applicants$: Observable<object>;
  id$: Subscription;
  id: string;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id$ = this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.store.dispatch(new courseActions.LoadApplicants(this.id));
    });

    this.applicants$ = this.store.select(state => state.course.applications);
  }

}
