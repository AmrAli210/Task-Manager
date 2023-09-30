import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ItaskInfo } from 'src/app/shared/interfaces/interfaces';
import { CreateTaskServiceService } from 'src/app/shared/services/create-task-service.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
})
export class UpdateTaskComponent {
  
  passedForm?:ItaskInfo;  

  id:string=''

  taskDetails: ItaskInfo = {
    title: '',
    description: '',
    id: '',
    date: '',
    type: '',
    newDate: '',
  };
  
  currentDate: string | Date = new Date();

  constructor(
    private createService: CreateTaskServiceService,
    private router: Router,
    private route:ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {    
     this.route.queryParamMap.subscribe((params :any) => {
        this.id=params.params.id        
      });      
      let taskEdit=this.createService.getTask(this.id)
      this.passedForm=taskEdit
  }

  formSubmitted(form:ItaskInfo) {    
    this.taskDetails.title =form.title;
    this.taskDetails.description = form.description;
    this.currentDate = this.datePipe.transform(this.currentDate,'yyyy/MM/dd hh:mm')!;
    this.taskDetails.newDate = this.currentDate;
    this.createService.updateTask(this.id,{taskTitle:this.taskDetails.title, taskDesc:this.taskDetails.description, taskNewDate:this.currentDate});
    this.router.navigate(['/']);
  }

}
