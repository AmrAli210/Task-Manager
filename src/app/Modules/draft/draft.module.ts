import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './draft.component';



@NgModule({
  declarations: [
    DraftComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DraftComponent]
})
export class DraftModule { }
