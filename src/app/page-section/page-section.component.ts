import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html'
})
export class PageSectionComponent implements OnInit {
  @Input() ShowContent;
  constructor() { }

  pageTitle = 'Page Section / Carousel';
  sections = [
    {
      expandCode: false,
      title: 'Page Section / Carousel',
      demoCode: `
     `,
      copyCode: `
      <div class="sb-pageSection">
          <!--Header-->
          <div class="sb-pageSection-header">
              <!--Section Title-->
              <h4 class="sb-pageSection-title m-0 mr-5">
                My Courses
              </h4>
              <!--/Section Title-->
              <!--Count-->
              <span class="sb-pageSection-count sb-label sb-label-xs sb-label-error">
            25
              </span>
              <!--/Count-->
              <!--View all button-->
              <button class="sb-btn sb-btn-xs sb-btn-secondary ml-auto">
                  View all
              </button>
              <!--/View all button-->
          </div>
          <!--/Header-->

          <!--Content-->
          <div class="sb-pageSection-content">
              <ngx-slick class="carousel" [config]="slideConfig">
                  <div ngxSlickItem class="mr-16">
                    <app-card></card>
                  </div>
              </ngx-slick>
          </div>
          <!--/Content-->
      </div>
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
