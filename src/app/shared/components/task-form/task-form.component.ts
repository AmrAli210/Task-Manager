import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItaskInfo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-task-from',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})

export class TaskFromComponent implements OnInit {
  
  @Output() formSubmitted: EventEmitter<ItaskInfo> =new EventEmitter<ItaskInfo>();
  @Input() passedForm?: ItaskInfo;


   taskInfo: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, public router: Router) {}

  ngOnInit() {
    if (this.passedForm) {
      this.taskInfo.get('title')?.setValue(this.passedForm.title);
      this.taskInfo.get('description')?.setValue(this.passedForm.description);
    }
  }

  submit() {
    this.formSubmitted.emit(this.taskInfo?.value);
  }
}
