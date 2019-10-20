import { Observable, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../store/reducers/index';
import * as courseActions from '../../../store/actions/course.actions';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  programs$: Observable<object>;
  schedules$: Observable<object>;
  fields$: Observable<object>;
  applicationBuilderForm: FormGroup;
  fields: object;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new courseActions.LoadProgramList());
    this.store.dispatch(new courseActions.LoadScheduleList());
    this.store.dispatch(new courseActions.LoadFieldList());

    this.programs$ = this.store.select(state => state.course.courseList);
    this.schedules$ = this.store.select(state => state.course.scheduleList);
    this.fields$ = this.store.select(state => state.course.fieldList);
    this.fields$.subscribe((data) => {
      this.fields = data;
      if (data) {
        data['specific_fields'].forEach(item => {
          this.addSpecificField();
        });
      }
    });
    this.initApplicationBuilderForm();
  }

  initApplicationBuilderForm() {
    this.applicationBuilderForm = this.fb.group({
      courseId: new FormControl('', Validators.required),
      scheduleId: new FormControl('', Validators.required),
      specificFields: this.fb.array([]),
      closingDate: new FormControl('', Validators.required)
    });
  }

  /**
   * Add new dilevery address row into form
   */
  addSpecificField() {
    const control = this.applicationBuilderForm.get('specificFields') as FormArray;
    control.push(this.getSpecificField());
  }

  /**
   * Create form dilevery address
   */
  private getSpecificField() {
    return this.fb.group({
      applicable: new FormControl(false),
      required: new FormControl(false)
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.applicationBuilderForm.invalid) {
      return;
    }
    const response = {
      corseId: this.applicationBuilderForm.get('courseId').value,
      scheduleId: this.applicationBuilderForm.get('scheduleId').value,
      closingDate: this.applicationBuilderForm.get('closingDate').value,
      fields: this.getAllApplicableFields()
    };

    this.store.dispatch(new courseActions.SaveApplicationMasterFile(response));
    this.router.navigateByUrl('/');
  }

  getAllApplicableFields() {
    let fields = [];
    fields = this.fields['common_fields'];
    const control = this.applicationBuilderForm.get('specificFields') as FormArray;
    control.controls.forEach((element, i) => {
      let field = null;
      if (element.get('applicable').value) {
        field = this.fields['specific_fields'][i];
        if (element.get('required').value) {
          field = {
            ...field,
            configuration: {
              ...field.configuration,
              required: true
            }
          }
          field['configuration'].required = true;
        }
        console.log(field);
        fields = [
          ...fields,
          field
        ];
      }
    });
    return fields;
  }


  onCheckChange(event, index, radioType) {
    const formArray: FormArray = this.applicationBuilderForm.get('specificFields') as FormArray;
    if (!formArray.controls[index].get('applicable').value && radioType === 'applicable') {
      formArray.controls[index].get('required').setValue(false);
    }

    if (formArray.controls[index].get('required').value && radioType === 'required') {
      formArray.controls[index].get('applicable').setValue(true);
    }
  }

}
