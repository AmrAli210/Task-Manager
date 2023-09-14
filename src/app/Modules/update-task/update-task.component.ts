import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ItaskInfo } from 'src/app/shared/interfaces/interfaces';
import { CreateTaskServiceService } from 'src/app/shared/services/create-task-service.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
})
export class UpdateTaskComponent {
  
  id:string=''

  taskDetails: ItaskInfo = {
    title: '',
    description: '',
    id: '',
    date: '',
    type: '',
    newDate: '',
  };
 
  
  taskInfo?: FormGroup;

  currentDate: string | Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private createService: CreateTaskServiceService,
    private router: Router,
    private route:ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {    
     this.route.queryParamMap.subscribe((params :any) => {
        // console.log("EL PARAMS :", params.params.id)
        this.id=params.params.id        
      });      

      let taskEdit=this.createService.getTask(this.id)
      this.taskInfo = this.formBuilder.group({
      title: [taskEdit.title, Validators.required],
      description: [taskEdit.description,Validators.required,],

    });
  }

  submit() {    
    this.taskDetails.title =this.taskInfo?.value.title;
    this.taskDetails.description = this.taskInfo?.value.description;
    this.currentDate = this.datePipe.transform(this.currentDate,'yyyy/MM/dd hh:mm')!;
    this.taskDetails.newDate = this.currentDate;
    this.createService.updateTask(this.id,{taskTitle:this.taskDetails.title, taskDesc:this.taskDetails.description, taskNewDate:this.currentDate});
    this.taskInfo?.reset();
    this.router.navigate(['/displayInfo']);
  }
  cancel()
  {
    this.router.navigate(['/displayinfo'])
  }
}
