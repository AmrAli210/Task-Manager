import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTaskComponent } from './update-task.component';
import { TaskFromModule } from 'src/app/shared/components/task-form/task-form.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateTaskComponent,
  ],
  imports: [
    CommonModule,
    TaskFromModule,
    ReactiveFormsModule,
  ],
  exports:[UpdateTaskComponent],
})
export class UpdateTaskModule { }
