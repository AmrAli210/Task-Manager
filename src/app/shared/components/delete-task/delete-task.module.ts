import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTaskComponent } from './delete-task.component';



@NgModule({
  declarations: [
    DeleteTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DeleteTaskComponent],
})
export class DeleteTaskModule { }
