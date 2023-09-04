import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlCarouselSlideCardComponent } from './owl-carousel-slide-card.component';
import { CardModule } from '../card/card.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [OwlCarouselSlideCardComponent],
  imports: [
    CommonModule,
    CardModule,
    CarouselModule
],
    
  exports: [OwlCarouselSlideCardComponent],
})
export class OwlCarouselSlideCardModule {}
