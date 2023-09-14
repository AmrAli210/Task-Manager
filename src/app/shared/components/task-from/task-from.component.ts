import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItaskInfo } from '../../interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTaskServiceService } from '../../services/create-task-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-task-from',
  templateUrl: './task-from.component.html',
  styleUrls: ['./task-from.component.scss'],
})
export class TaskFromComponent implements OnInit {
  // @Input() getDetails?:ItaskInfo


  taskDetails: ItaskInfo = {
    title: '',
    description: '',
    id: '',
    date: '',
    newDate:'',
    type:'Drafts'
  };

  taskInfo?: FormGroup;

   currentDate: string | Date = new Date();

  myGuid = uuidv4();

  constructor(
    private formBuilder: FormBuilder,
    private createService: CreateTaskServiceService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.taskInfo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  submit() {
    this.taskDetails.title= this.taskInfo?.value.title;
    this.taskDetails.description = this.taskInfo?.value.description;
    this.taskDetails.id=this.myGuid;
    this.currentDate = this.datePipe.transform(this.currentDate,'yyyy/MM/dd hh:mm')!;
    this.taskDetails.date=this.currentDate    
    this.createService.addInfo(this.taskDetails);
    this.taskInfo?.reset();
    this.router.navigate(['/displayInfo']);
  }
  cancel()
  {
    this.router.navigate(['/displayinfo'])
  }
}
