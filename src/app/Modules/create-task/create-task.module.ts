import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[CreateTaskComponent],
})
export class CreateTaskModule { }
