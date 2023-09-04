import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CreateTaskComponent } from './Modules/create-task/create-task.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'createTask', component: CreateTaskComponent},
  {path:'displayInfo', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
