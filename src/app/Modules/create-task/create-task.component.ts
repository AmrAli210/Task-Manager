import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItaskInfo } from 'src/app/shared/interfaces/interfaces';
import { CreateTaskServiceService } from 'src/app/shared/services/create-task-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})

export class CreateTaskComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private createService: CreateTaskServiceService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  taskDetails: ItaskInfo = {
    title: '',
    description: '',
  };

  taskInfo?: FormGroup;

  ngOnInit() {
    this.taskInfo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  currentDate: string | Date = new Date();

  Submit() {
    this.taskDetails.title = this.taskInfo?.value.title;
    this.taskDetails.description = this.taskInfo?.value.description;
    this.currentDate = this.datePipe.transform(this.currentDate,'yyyy/MM/dd hh:mm')!;
    this.createService.createDate(this.currentDate);
    this.createService.addInfo(this.taskDetails);
    this.taskInfo?.reset();
    this.router.navigate(['/displayInfo']);
  }
}
