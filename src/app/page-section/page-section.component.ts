import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html'
})
export class PageSectionComponent implements OnInit {

  constructor() { }

  pageTitle = 'Page Section / Carousel';
  sections = [
    {
      expandCode: false,
      title: 'Page Section / Carousel',
      demoCode: `
      
     `,
      copyCode: `
      
      `
    }
  ];

  ngOnInit() {
  }

}
