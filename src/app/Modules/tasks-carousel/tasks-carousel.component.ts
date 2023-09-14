import { ItaskInfo } from 'src/app/shared/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tasks-carousel',
  templateUrl: './tasks-carousel.component.html',
  styleUrls: ['./tasks-carousel.component.scss'],
})
export class tasksCarouselComponent implements OnInit {
  drafts: ItaskInfo[] = [];
  inProgress: ItaskInfo[] = [];
  reviews: ItaskInfo[] = [];
  doneItem: ItaskInfo[] = [];



  draftsStorage = JSON.parse(localStorage.getItem('data')!);
  inprogressStorage = JSON.parse(localStorage.getItem('inprogressData')!);
  reviewsStorage = JSON.parse(localStorage.getItem('reviewsData')!);
  doneStorage = JSON.parse(localStorage.getItem('doneTasksData')!);

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    autoWidth: true,
    navText: [
      '<i class= "pi pi-chevron-left"></i>',
      '<i class= "pi pi-chevron-right"></i>',
    ],
    nav: true,
    responsive:{
      0:{
          items:1,
          nav: true,
          center:true
      },
      500:{
        items:1,
        nav: true,
      },
      600:{
          items:2,
          nav: true,

      },
      1000:{
          items:4,
          nav: true,          
      },
  }
  };
  myTypes: string[] = ['Drafts', 'In-progress', 'Reviews', 'Done'];

  ngOnInit() {
    if (this.draftsStorage != null) {
      this.drafts = this.draftsStorage;
    }
    if (this.inprogressStorage != null) {
      this.inProgress = this.inprogressStorage;
    }
    if (this.reviewsStorage != null) {
      this.reviews = this.reviewsStorage;
    }
    if (this.doneStorage != null) {
      this.doneItem = this.doneStorage;
    }
  }

  deleteItem(task: ItaskInfo) {
    for (let i = this.drafts.length; i--; ) {
      if (this.drafts[i].id === task.id) {
        this.drafts.splice(i, 1);
        localStorage.setItem('data', JSON.stringify(this.drafts));
      }
    }

    for (let i = this.inProgress.length; i--; ) {
      if (this.inProgress[i].id === task.id) {
        this.inProgress.splice(i, 1);
        localStorage.setItem('inprogressData', JSON.stringify(this.inProgress));
      }
    }

    for (let i = this.reviews.length; i--; ) {
      if (this.reviews[i].id === task.id) {
        this.reviews.splice(i, 1);
        localStorage.setItem('reviewsData', JSON.stringify(this.reviews));
      }
    }

    for (let i = this.doneItem.length; i--; ) {
      if (this.doneItem[i].id === task.id) {
        this.doneItem.splice(i, 1);
        localStorage.setItem('doneTasksData', JSON.stringify(this.doneItem));
      }
    }

    // if(this.drafts.filter(draft=> draft.id == task.id))
    // {
    //   this.drafts.splice(this.drafts.indexOf(task),1)
    // }
    // if(this.inProgress.filter(ip=> ip.id == task.id))
    // {
    //   this.inProgress.splice(this.inProgress.indexOf(task),1)
    // }
    //  else if(task.id)
    //   {
    //     this.reviews.splice(index,1)
    //   }
    // else  if(task.id)
    //   {
    //     this.doneItem.splice(index,1)
    //   }

    // for (let type of this.myTypes) {
    //   if (task.type == type) {
    //   }
    // }

    // this.drafts.splice(index, 1),
    // localStorage.setItem('data', JSON.stringify(this.drafts));
    // this.inProgress.splice(index, 1),
    // localStorage.setItem('inprogressData', JSON.stringify(this.inProgress));
    // this.reviews.splice(index, 1),
    // localStorage.setItem('reviewsData', JSON.stringify(this.reviewsStorage));
    // this.doneStorage.splice(index, 1),
    // localStorage.setItem('doneTasksData', JSON.stringify(this.doneStorage));
  }

  goNext(taskInfo: ItaskInfo, index: number) {
    if (taskInfo.type == 'Drafts') {
      this.drafts.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(this.drafts));
      this.inProgress.unshift(taskInfo);
      taskInfo.type = 'In-progress';
      localStorage.setItem('inprogressData', JSON.stringify(this.inProgress));
    } else if (taskInfo.type == 'In-progress') {
      this.inProgress.splice(index, 1);
      localStorage.setItem('inprogressData', JSON.stringify(this.inProgress));
      this.reviews.unshift(taskInfo);
      taskInfo.type = 'Review';
      localStorage.setItem('reviewsData', JSON.stringify(this.reviews));
    } else if (taskInfo.type == 'Review') {
      this.reviews.splice(index, 1);
      localStorage.setItem('reviewsData', JSON.stringify(this.reviews));
      this.doneItem.unshift(taskInfo);
      taskInfo.type = 'Done';
      localStorage.setItem('doneTasksData', JSON.stringify(this.doneItem));
    }
  }

  goPrev(taskInfo: ItaskInfo, index: number) {
    if (taskInfo.type == 'In-progress') {
      this.inProgress.splice(index, 1);
      localStorage.setItem('inprogressData', JSON.stringify(this.inProgress));
      this.drafts.unshift(taskInfo);
      taskInfo.type = 'Drafts';
      localStorage.setItem('data', JSON.stringify(this.drafts));
    } else if (taskInfo.type == 'Review') {
      this.reviews.splice(index, 1);
      localStorage.setItem('reviewsData', JSON.stringify(this.reviews));
      this.inProgress.unshift(taskInfo);
      taskInfo.type = 'In-progress';
      localStorage.setItem('inprogressData', JSON.stringify(this.inProgress));
    } else if (taskInfo.type == 'Done') {
      this.doneItem.splice(index, 1);
      localStorage.setItem('doneTasksData', JSON.stringify(this.doneItem));
      this.reviews.unshift(taskInfo);
      taskInfo.type = 'Review';
      localStorage.setItem('reviewsData', JSON.stringify(this.reviews));
    }
  }
}
