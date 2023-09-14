import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFromModule } from 'src/app/shared/components/task-from/task-from.module';



@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskFromModule
  ],
  exports:[CreateTaskComponent],
})
export class CreateTaskModule { }
