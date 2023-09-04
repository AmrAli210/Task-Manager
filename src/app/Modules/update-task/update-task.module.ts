import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTaskComponent } from './update-task.component';



@NgModule({
  declarations: [
    UpdateTaskComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[UpdateTaskComponent],
})
export class UpdateTaskModule { }
