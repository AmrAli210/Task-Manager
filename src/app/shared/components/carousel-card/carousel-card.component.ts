import { ItaskInfo } from 'src/app/shared/interfaces/interfaces';
import { CreateTaskServiceService } from '../../services/create-task-service.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss'],
})
export class CarouselCardComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    autoWidth: true,
    navText: [
      '<i class=fa-solid fa-chevron-right></i>',
      '<i class=fa-solid fa-chevron-left></i>',
    ],
    nav: true,
  };
  constructor() {}

  tasksInfo: ItaskInfo[] = [];

  fetchedItems = localStorage.getItem('data');
  ngOnInit() {
    
    if (this.fetchedItems !== null) {
      this.tasksInfo.push(JSON.parse(this.fetchedItems));
    }

  }
}
