import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskServiceService } from 'src/app/shared/services/create-task-service.service';
import { ItaskInfo } from 'src/app/shared/interfaces/interfaces';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent  {

  taskDetails: ItaskInfo = {
    title: '',
    description: '',
    id: '',
    date: '',
    newDate:'',
    type:'Drafts'
  };


   currentDate: string | Date = new Date();

  myGuid = uuidv4();

  constructor(
    private createService: CreateTaskServiceService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
   
  }

  formSubmitted(form:ItaskInfo) {    
    this.taskDetails.title= form.title;
    this.taskDetails.description = form.description;
    this.taskDetails.id=this.myGuid;
    this.currentDate = this.datePipe.transform(this.currentDate,'yyyy/MM/dd hh:mm')!;
    this.taskDetails.date=this.currentDate    
    this.createService.addInfo(this.taskDetails);
    this.router.navigate(['/']);
  }
}
