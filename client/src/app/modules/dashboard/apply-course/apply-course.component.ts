import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from, Subscription } from 'rxjs';

import * as fromRoot from '../../../store/reducers/index';
import * as courseActions from '../../../store/actions/course.actions';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.css']
})
export class ApplyCourseComponent implements OnInit {
  @ViewChild('fileInput', { static: true }) el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile = true;
  removeUpload = false;
  id$: Subscription;
  id: string;
  courseData$: Observable<object>;
  applicationForm: FormGroup;
  countries$: Observable<object>;
  district$: Observable<object>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initApplicationForm();
    this.store.dispatch(new courseActions.LoadCountries(this.id));
    this.store.dispatch(new courseActions.LoadDistricts(this.id));
    this.id$ = this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.store.dispatch(new courseActions.LoadCourseData(this.id));
    });

    this.countries$ = this.store.select(state => state.course.countries);
    this.district$ = this.store.select(state => state.course.districts);
    this.courseData$ = this.store.select(state => state.course.selectedCourse);
    this.courseData$.subscribe(data => {
      if (data) {
        data['fields'].forEach((field, index) => {
          if (field['configuration']['category'] === 'personal') {
            this.applicationForm.addControl(field['field_name'], new FormControl(''));
            if (field['configuration']['required']) {
              this.applicationForm.get(field['field_name']).setValidators([Validators.required]);
            }
          }
        });
        console.log(this.applicationForm)
      }
    });
  }

  initApplicationForm() {
    this.applicationForm = this.fb.group({});
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.applicationForm.invalid) {
      return;
    }
    const response = {
      academic_schedule_id: this.id,
      data: this.applicationForm.value
    };

    this.store.dispatch(new courseActions.SaveApplication(response));
    this.router.navigateByUrl('/');
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        //   this.registrationForm.patchValue({
        //     file: reader.result
        //   });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      // this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    // let newFileList = Array.from(this.el.nativeElement.files);
    // this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    // this.editFile = true;
    // this.removeUpload = false;
    // this.registrationForm.patchValue({
    //   file: [null]
    // });
  }

}
