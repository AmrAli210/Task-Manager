import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
