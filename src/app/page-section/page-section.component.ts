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

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "responsive": [
      {
        "breakpoint": 2800,
        "settings": {
          "slidesToShow": 6,
          "slidesToScroll": 6
        }
      },
      {
        "breakpoint": 2200,
        "settings": {
          "slidesToShow": 5,
          "slidesToScroll": 5
        }
      },
      {
        "breakpoint": 1920,
        "settings": {
          "slidesToShow": 4,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 1440,
        "settings": {
          "slidesToShow": 3.5,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 1200,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 992,
        "settings": {
          "slidesToShow": 2.25,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 750,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 660,
        "settings": {
          "slidesToShow": 1.75,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 1.5,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 530,
        "settings": {
          "slidesToShow": 1.33,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 498,
        "settings": {
          "slidesToShow": 1.25,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 450,
        "settings": {
          "slidesToShow": 1.15,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 390,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ],
    "infinite": false,
    "rtl": false
  }

  ngOnInit() {
  }

}
