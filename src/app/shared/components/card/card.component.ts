import { Component, Input, OnInit } from '@angular/core';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { CreateTaskServiceService } from '../../services/create-task-service.service';
import { ItaskInfo } from '../../interfaces/interfaces';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  
})
export class CardComponent implements OnInit {

  constructor(private cardDetails: CreateTaskServiceService) {}

  
  @Input() taskInfo?: ItaskInfo;
  items: MenuItem[] | undefined;

  faEllipsisVertical = faEllipsisVertical;


  currentDate: Date | string =new Date();



  ngOnInit() {
    this.currentDate = this.cardDetails.currentDate;

    

    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh ',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          },
        ],
      },
    ];
  }

}
