import { Component, Input } from '@angular/core';
import { ItaskInfo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-owl-carousel-slide-card',
  templateUrl: './owl-carousel-slide-card.component.html',
  styleUrls: ['./owl-carousel-slide-card.component.scss'],
})
export class OwlCarouselSlideCardComponent {
  @Input() task?: ItaskInfo;
}
