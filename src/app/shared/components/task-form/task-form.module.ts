import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFromComponent } from './task-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskFromComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[TaskFromComponent]
})
export class TaskFromModule { }
