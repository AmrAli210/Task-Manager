import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DraftModule } from 'src/app/Modules/draft/draft.module';
import { CarouselCardModule } from 'src/app/shared/components/carousel-card/carousel-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardModule, DraftModule,CarouselCardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
