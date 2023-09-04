import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselCardComponent } from './carousel-card.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { OwlCarouselSlideCardModule } from 'src/app/shared/components/owl-carousel-slide-card/owl-carousel-slide-card.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CarouselCardComponent],
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    FontAwesomeModule,
    ButtonModule,
    CardModule,
    OwlCarouselSlideCardModule
  ],
  exports: [CarouselCardComponent],
})
export class CarouselCardModule {}
