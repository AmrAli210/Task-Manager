import { Injectable } from '@angular/core';
import { ItaskInfo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskServiceService {
  taskDetails: ItaskInfo[] = [];

  draftsStorage = JSON.parse(localStorage.getItem('data')!);
  inprogressStorage = JSON.parse(localStorage.getItem('inprogressData')!);
  reviewsStorage = JSON.parse(localStorage.getItem('reviewsData')!);
  doneStorage = JSON.parse(localStorage.getItem('doneTasksData')!);

  constructor() {
    // this.taskDetails = JSON.parse(localStorage.getItem('data')!);
  }

  addInfo(taskDetails: ItaskInfo) {
    this.taskDetails.push(taskDetails);
    this.addTasksInfo();
  }

  addTasksInfo() {
    localStorage.setItem('data', JSON.stringify(this.taskDetails));
  }

  getTask(id: string | number) {
    for (let i = 0; i < this.draftsStorage.length; i++) {
      if (this.draftsStorage[i].id == id) {        
        return this.draftsStorage[i];
      }
    }
    for (let i = 0; i < this.inprogressStorage.length; i++) {
      if (this.inprogressStorage[i].id == id) {
        return this.inprogressStorage[i];
      }
    }
    for (let i = 0; i < this.reviewsStorage.length; i++) {
      if (this.reviewsStorage[i].id == id) {
        return this.reviewsStorage[i];
      }
    }
    for (let i = 0; i < this.doneStorage.length; i++) {
      if (this.doneStorage[i].id == id) {
        return this.doneStorage[i];
      }
    }
  }

  updateTask(id: string, newdata: any) {
    let task = this.getTask(id);
    
    task.title = newdata.taskTitle;
    task.description = newdata.taskDesc;
    task.newDate = newdata.taskNewDate;

    for (let i = 0; i < this.draftsStorage.length; i++) {
      if (this.draftsStorage[i].id == id) {
        this.draftsStorage.splice([i], 1, task);
        localStorage.setItem('data', JSON.stringify(this.draftsStorage));
      }
    }
    for (let i = 0; i < this.inprogressStorage.length; i++) {
      if (this.inprogressStorage[i].id == id) {
        this.inprogressStorage.splice([i], 1, task);
        localStorage.setItem('inprogressData', JSON.stringify(this.inprogressStorage));
      }
    }
    for (let i = 0; i < this.reviewsStorage.length; i++) {
      if (this.reviewsStorage[i].id == id) {
        this.reviewsStorage.splice([i], 1, task);
        localStorage.setItem('reviewsData', JSON.stringify(this.reviewsStorage));
      }
    }
    for (let i = 0; i < this.doneStorage.length; i++) {
      if (this.doneStorage[i].id == id) {
        this.doneStorage.splice([i], 1, task);
        localStorage.setItem('doneTasksData', JSON.stringify(this.doneStorage));
      }
    }
  }
}
