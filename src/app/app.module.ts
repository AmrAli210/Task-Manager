import { TaskFromModule } from './shared/components/task-form/task-form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksCardModule } from './shared/components/tasks-card/tasks-card.module';
import { CreateTaskModule } from './Modules/create-task/create-task.module';
import { UpdateTaskModule } from './Modules/update-task/update-task.module';
import { HomeModule } from './views/home/home.module';
import { CreateTaskServiceService } from './shared/services/create-task-service.service';
import { tasksCarouselModule } from './Modules/tasks-carousel/tasks-carousel.module';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TasksCardModule,
    CreateTaskModule,
    UpdateTaskModule,
    HomeModule,
    tasksCarouselModule,
    TaskFromModule,
    NgbModule,
  ],
  providers: [CreateTaskServiceService, DatePipe, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
