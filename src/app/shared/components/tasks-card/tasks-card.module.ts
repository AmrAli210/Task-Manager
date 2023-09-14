import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksCardComponent } from './tasks-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [TasksCardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    ConfirmDialogModule,
  ],
  exports: [TasksCardComponent],
})
export class TasksCardModule {}
