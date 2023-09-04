import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InProgressComponent } from './in-progress.component';



@NgModule({
  declarations: [
    InProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[InProgressComponent]
})
export class InProgressModule { }
