import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html'
})
export class TypographyComponent implements OnInit {

  constructor() { }

  pageTitle = 'Typography';
  sections = [
    {
      expandCode: false,
      title: 'Section Title with View All',
      demoCode: `
      <div class="sb-pageSection">
      <div class="sb-pageSection-header">
        <h4 class="sb-pageSection-title m-0">My Courses</h4>
        <span class="sb-pageSection-count sb-label sb-label-xs sb-label-warning ml-8">25</span>
        <button class="sb-btn sb-btn-xs sb-btn-secondary ml-auto">View all</button>
      </div>
      </div>
     `,
      copyCode: `
      <div class="sb-pageSection">
      <div class="sb-pageSection-header">
        <h4 class="sb-pageSection-title m-0">My Courses</h4>
        <span class="sb-pageSection-count sb-label sb-label-xs sb-label-warning ml-8">25</span>
        <button class="sb-btn sb-btn-xs sb-btn-secondary ml-auto">View all</button>
      </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Section Title with Close',
      demoCode: `
      <div class="sb-pageSection">
      <div class="sb-pageSection-header">
        <h4 class="sb-pageSection-title m-0">My Courses</h4>
        <span class="sb-pageSection-count sb-label sb-label-xs sb-label-warning ml-8">25</span>
        <button class="sb-btn sb-btn-xs sb-btn-error ml-auto">Close <i class="close icon"></i></button>
      </div>
      </div>
     `,
      copyCode: `
      <div class="sb-pageSection">
      <div class="sb-pageSection-header">
        <h4 class="sb-pageSection-title m-0">My Courses</h4>
        <span class="sb-pageSection-count sb-label sb-label-xs sb-label-warning ml-8">25</span>
        <button class="sb-btn sb-btn-xs sb-btn-error ml-auto">Close <i class="close icon"></i></button>
      </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Player Details - Title & Content',
      demoCode: `
      <h4 class="sb-h4-title font-weight-bold sb-bbtm">Balance diet (C4TVNF,C53RQ3,Balance FOOD)</h4>
      <hr class="sb-break-line mt-32 mb-16" />
      <h5 class="sb-h5-title mb-16 font-weight-bold">Description</h5>
      <p class="sb-para">India... It's a country of great wisdom, incredible history, ruins of ancient cities, eastern spices, delicious tea, and beautiful nature. India gave the world a great civilization. You will never want to leave it. However, when you have to do that, don't forget to exchange your rupees. No one is allowed to take them out of the country!</p>
      <hr class="sb-break-line my-24" />
     `,
      copyCode: `
      <h4 class="sb-h4-title font-weight-bold sb-bbtm">Balance diet (C4TVNF,C53RQ3,Balance FOOD)</h4>
      <hr class="sb-break-line mt-32 mb-16" />
      <h5 class="sb-h5-title mb-16 font-weight-bold">Description</h5>
      <p class="sb-para">India... It's a country of great wisdom, incredible history, ruins of ancient cities, eastern spices, delicious tea, and beautiful nature. India gave the world a great civilization. You will never want to leave it. However, when you have to do that, don't forget to exchange your rupees. No one is allowed to take them out of the country!</p>
      <hr class="sb-break-line my-24" />
      `
    }
  ];

  ngOnInit() {
  }

}
