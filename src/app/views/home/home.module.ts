import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TasksCardModule } from 'src/app/shared/components/tasks-card/tasks-card.module';
import { tasksCarouselModule } from 'src/app/Modules/tasks-carousel/tasks-carousel.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TasksCardModule, tasksCarouselModule],
  exports: [HomeComponent],
})
export class HomeModule {} 
