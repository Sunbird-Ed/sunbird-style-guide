import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  multiSelect1: any;

  constructor() {
    this.multiSelect1 = [{ name: 'Example' }, { name: 'Test' }, { name: 'that' }];
    console.log(this.multiSelect1);
  }


  pageTitle = 'Rating';
  sections = [
    {
      expandCode: false,
      title: 'Rating',
      demoCode: `
       `,
      copyCode: `
      <div class="field">
        <sui-rating [maximum]="5"[ngModel]="3" class="sb-rating mini"></sui-rating>
      </div>
      <div class="field">
        <sui-rating [maximum]="5" [ngModel]="3" class="sb-rating tiny"></sui-rating>
      </div>
      <div class="field">
        <sui-rating [maximum]="5" [ngModel]="3" class="sb-rating small"></sui-rating>
      </div>
      <div class="field">
        <sui-rating [maximum]="5" [ngModel]="3" class="sb-rating"></sui-rating>
      </div>
      <div class="field">
        <sui-rating [maximum]="5" [ngModel]="3" class="sb-rating large"></sui-rating>
      </div>
      <div class="field">
        <sui-rating [maximum]="5" [ngModel]="3" class="sb-rating huge"></sui-rating>
      </div>
      <div class="field">
        <sui-rating [maximum]="5" [ngModel]="3" class="sb-rating massive"></sui-rating>
      </div>

      `
    }

  ]

  ngOnInit() {
  }

}
