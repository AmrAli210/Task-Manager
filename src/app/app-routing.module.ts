import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UpdateTaskComponent } from './Modules/update-task/update-task.component';
import { TaskFromComponent } from './shared/components/task-form/task-form.component';
import { CreateTaskComponent } from './Modules/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'taskForm/createTask', component: CreateTaskComponent},
  { path: 'taskForm/updateTask', component: UpdateTaskComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
