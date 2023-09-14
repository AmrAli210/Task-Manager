import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tasksCarouselComponent } from './tasks-carousel.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TasksCardModule } from 'src/app/shared/components/tasks-card/tasks-card.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [tasksCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    FontAwesomeModule,
    ButtonModule,
    TasksCardModule,
  ],
  exports: [tasksCarouselComponent],
})
export class tasksCarouselModule {}
