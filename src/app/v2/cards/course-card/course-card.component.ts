import { Component, OnInit } from '@angular/core';
import { HighlightResult } from "ngx-highlightjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})

export class CourseCardComponent implements OnInit {

  constructor(private router: Router) { }
  currentSection = 'psection1';
  
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  pageTitle = "Basic Course Card";
  sections = [
    {
      expandCode: false,
      id: 'psection1',
      title: "Basic Course card with placeholder",
      description: `<div class="note"><p class="mb-0 sb-color-gray-800"><i class="fa-solid fa-circle-info"></i> The css3 varaiables can be replaced with any of your supported theme colors.</p></div>`,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img [src]="cardImg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img [src]="cardImg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
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
        flex: 1;
        overflow: hidden;
      }
      .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
      .sb__ellipsis--two {
        -webkit-line-clamp: 2;
      }
      `,
      copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
    }`
    },
    {
      expandCode: false,
      id:'psection2',
      title: "Course card with Thumbnail/Profile Icon",
      description:"",
      url:"https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
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
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
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
    .sb__ellipsis--two {
      -webkit-line-clamp: 2;
    }
    `,
    copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-img-container-bg: var(--gray-100);
    }
    `
    },
    {
      expandCode: false,
      id:'psection3',
      title: "Course card (Mobile)",
      description:"",
      url:"https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
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
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
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
    .sb__ellipsis--two {
      -webkit-line-clamp: 2;
    }
    `,
    copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-img-container-bg: var(--gray-100);
    }
    `
    },
    {
      expandCode: false,
      id:'psection4',
      title: "Course card (Web)",
      description:"",
      url:"https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
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
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
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
    .sb__ellipsis--two {
      -webkit-line-clamp: 2;
    }
    .sb--card--course .sb--card__meta_c_data {
      min-height: 2rem;
      padding: 0.5rem;
      background-color: var(--cc-sbcard-metaC-data);
      font-size: .8rem;
    }
    `,
    copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-metaC-data: var(--rc-FAFAFA);
    }
    `
    },
    {
      expandCode: false,
      id:'psection5',
      title: "Course card (Web) - 'Selected'",
      description:"",
      url:"https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course selected" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course selected" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
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
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
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
    .sb__ellipsis--two {
      -webkit-line-clamp: 2;
    }
    .sb--card--course .sb--card__meta_c_data {
      min-height: 2rem;
      padding: 0.5rem;
      background-color: var(--cc-sbcard-metaC-data);
      font-size: .8rem;
    }
    .sb--card.selected {
      border: 0.063rem solid var(--cc-sbcard-selected-border);
      border-radius: 0.25rem;
      background-color: var(--cc-sbcard-selected-bg);
    }
    .sb--card.selected .sb--card__meta_c_data{
      background-color: background-color: transparent;
    }
    `,
    copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-metaC-data: var(--rc-FAFAFA);
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg: rgba(2, 79, 157, 0.2);
    }
    `
    },
    {
      expandCode: false,
      id:'psection6',
      title: "Course card (Web) - 'Offline'",
      description:"",
      url:"https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course offline" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course offline" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
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
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
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
    .sb__ellipsis--two {
      -webkit-line-clamp: 2;
    }
    .sb--card--course .sb--card__meta_c_data {
      min-height: 2rem;
      padding: 0.5rem;
      background-color: var(--cc-sbcard-metaC-data);
      font-size: .8rem;
    }
    .sb--card.offline .sb--card__meta_c_data{
      opacity: 0.5;
    }
    `,
    copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-img-container-bg: var(--gray-100);
    }
    `
    },
  ];

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
