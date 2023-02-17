import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCardsComponent } from './all-cards.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AllCardsComponent, CardOneComponent, CardTwoComponent]
})
export class AllCardsModule { }
