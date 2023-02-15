import { Component, OnInit } from '@angular/core';
import { HighlightResult } from "ngx-highlightjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-curiculum-card',
  templateUrl: './course-curiculum-card.component.html',
  styleUrls: ['./course-curiculum-card.component.scss']
})

export class CourseCuriculumCardComponent implements OnInit {

  constructor(private router: Router) { }
  currentSection = 'psection1';
  
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  pageTitle = "Course Curiculum Card";
  sections = [
    {
      expandCode: false,
      id: 'psection1',
      title: "Course Curiculum Card",
      description: `<div class="note"><p class="mb-0 sb-color-gray-800"><i class="fa-solid fa-circle-info"></i> The css3 varaiables can be replaced with any of your supported theme colors.</p></div>`,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course--curiculum" tabindex="0" style="background: rgb(255, 224, 130);">
        <div class="sb--card__main-area">
            <div class="sb--card__info pl-8">
              <h4 class="sb--card__title sb__ellipsis sb__ellipsis--three text-center font-weight-bold" title="{{title}}" style="color:rgb(107, 61, 0)">Digital textbooks</h4>
            </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course--curiculum" tabindex="0" style="background: rgb(255, 224, 130);">
        <div class="sb--card__main-area">
            <div class="sb--card__info pl-8">
              <h4 class="sb--card__title sb__ellipsis sb__ellipsis--three text-center font-weight-bold" title="{{title}}" style="color:rgb(107, 61, 0)">Digital textbooks</h4>
            </div>
        </div>
      </div>
      `,
      copyCSS: `
      .sb--card {
        width: 100%;
        background-color: var(--cc-sbcard-bg);
        display: flex;
        flex-direction: column;
        cursor: pointer;
        position: relative;
        margin-top: 0px;
        border: 0px;
        contain: content;
        border-radius: 0.125rem;
      }
      .sb--card__main-area {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 5.5rem;
      }
      .sb--card__info {
        padding: 0 0.5rem 0 0;
        flex: 1;
        overflow: hidden;
      }
      .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
        line-height: 1.25rem;
      }
      .sb--card__info {
        flex: 1;
        overflow: hidden;
      }
      .sb__ellipsis {
        -webkit-box-orient: vertical;
        display: block;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
      }
      .sb__ellipsis--three {
        -webkit-line-clamp: 3;
      }
      `,
      copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
    }`
    },
    {
      expandCode: false,
      id: 'psection2',
      title: "Course Curiculum Card - Profile/Image",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course--curiculum" tabindex="0" style="background: rgb(218, 212, 255)">
        <div class="sb--card__main-area">
          <div class="sb--card__info pl-8">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="{{title}}" style="color: rgb(47, 39, 185)">Practice question set</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 ellipsis" title="{{subTitle}}">Sub Title</span>
            </div>
          </div>
          <!-- card img -->
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course--curiculum" tabindex="0" style="background: rgb(218, 212, 255)">
        <div class="sb--card__main-area">
          <div class="sb--card__info pl-8">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="{{title}}" style="color: rgb(47, 39, 185)">Practice question set</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 ellipsis" title="{{subTitle}}">Sub Title</span>
            </div>
          </div>
          <!-- card img -->
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      `,
      copyCSS: `
      .sb--card {
        width: 100%;
        background-color: var(--cc-sbcard-bg);
        display: flex;
        flex-direction: column;
        cursor: pointer;
        position: relative;
        margin-top: 0px;
        border: 0px;
        contain: content;
        border-radius: 0.125rem;
      }
      .sb--card__main-area {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 5.5rem;
      }
      .sb--card__info {
        padding: 0 0.5rem 0 0;
        flex: 1;
        overflow: hidden;
      }
      .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
        line-height: 1.25rem;
        font-weight:bold;
      }
      .sb--card__info {
        flex: 1;
        overflow: hidden;
      }
      .sb__ellipsis {
        -webkit-box-orient: vertical;
        display: block;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
      }
      .sb__ellipsis--three {
        -webkit-line-clamp: 3;
      }
      .sb--card__meta1 {
        color: var(--cc-sbcard-meta-text);
        font-size: 0.75rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1;
        line-height: 1.25rem;
        margin-top: 0.25rem;
      }
      .sb--card .data_1 {
        max-width: 50%;
      }
      .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      `,
      copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
    }`
    },
  ];

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
