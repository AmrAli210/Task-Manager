import { ItaskInfo } from 'src/app/shared/interfaces/interfaces';
import { CreateTaskServiceService } from './../../services/create-task-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class TasksCardComponent implements OnInit {
  @Input() taskInfo?: ItaskInfo;

  @Output() onDeleteCard: EventEmitter<ItaskInfo> =new EventEmitter<ItaskInfo>();
  @Output() GoNext: EventEmitter<ItaskInfo> =new EventEmitter<ItaskInfo>();
  @Output() GoPrev: EventEmitter<ItaskInfo> =new EventEmitter<ItaskInfo>();

  items: MenuItem[] | undefined;

  visible: boolean = false;

  currentDate?: Date | string;

  firstPhase=true
  lastPhase=true
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private createService: CreateTaskServiceService
  ) {}

  ngOnInit() {
    
    if(this.taskInfo?.type=='Drafts')
    {
      this.firstPhase=false
    }
    else if(this.taskInfo?.type=='Done')
    {
      this.lastPhase=false
    }

    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh ',
            command: () => {
              this.update();
            },
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.confirm1();
            },
          },
        ],
      },
    ];
  }

  confirm1() {
    // this.confirmMsg.emit(true)
    this.confirmationService.confirm({
      message: '<h5> Delete Task ? <h5>',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteItem();
      },
    });
  }

  update() {
    this.router.navigate(['/taskForm/updateTask/'],{queryParams: { id: this.taskInfo?.id , type: this.taskInfo?.type}});
  }

  deleteItem() {
    this.onDeleteCard.emit(this.taskInfo);
  }

  goNext()
  {
    this.GoNext.emit(this.taskInfo)
  }

  goPrev()
  {
    this.GoPrev.emit(this.taskInfo)
  }

 
}
