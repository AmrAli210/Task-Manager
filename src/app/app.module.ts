import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from './shared/components/card/card.module';
import { CreateTaskModule } from './Modules/create-task/create-task.module';
import { DeleteTaskModule } from './shared/components/delete-task/delete-task.module';
import { NavBarModule } from './Modules/nav-bar/nav-bar.module';
import { UpdateTaskModule } from './Modules/update-task/update-task.module';
import { HomeModule } from './views/home/home.module';
import { CreateTaskServiceService } from './shared/services/create-task-service.service';
import { CarouselCardModule } from './shared/components/carousel-card/carousel-card.module';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    CreateTaskModule,
    DeleteTaskModule,
    NavBarModule,
    UpdateTaskModule,
    HomeModule,
    CarouselCardModule,
    NgbModule,
  ],
  providers: [CreateTaskServiceService, DatePipe, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
