
import { Component, OnInit } from '@angular/core';
import { HighlightResult } from "ngx-highlightjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-course-card',
  templateUrl: './my-course-card.component.html',
  styleUrls: ['./my-course-card.component.scss']
})

export class MyCourseCardComponent implements OnInit {

  constructor(private router: Router) { }
  currentSection = 'psection1';
  
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  pageTitle = "Basic My Course Card";
  sections = [
    {
      expandCode: false,
      id: 'psection1',
      title: "Basic",
      description: `<div class="note"><p class="mb-0 sb-color-gray-800"><i class="fa-solid fa-circle-info"></i> The css3 varaiables can be replaced with any of your supported theme colors.</p></div>`,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
            <div class="sb--card__progressbar">
              <span [ngStyle]="fetchProgress()"></span>
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
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
            <div class="sb--card__progressbar">
              <span [ngStyle]="fetchProgress()"></span>
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
      .sb--card--course .sb--container-box {
        min-width: 0;
        flex: 1;
        padding-right: 0.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .sb--card--course .sb--container-box .sb--card__info {
        padding: 0rem 0rem 0rem 0rem;
        display: flex;
        align-items: center;
      }
      .sb--card__info {
        flex: 1;
        overflow: hidden;
      }
      [dir=ltr] .sb--card__info {
        padding-right: 0.5rem;
      }
      .sb--card--course .sb--container-box .sb--holder {
        flex: 1;
        min-width: 0;
      }
      .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
      .text-left {
        text-align: left !important;
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
      .sb--card--course .sb--card__meta1 {
        --cc-sbcard-meta1: var(--gray-400);
        color: var(--cc-sbcard-meta1);
        line-height: 1rem;
      }
      .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .sb--card--course .data_1 {
        max-width: 100% !important;
      }
      .sb--card__progressbar {
        height: 0.25rem;
        margin: 0px 0 0px;
        border-radius: 0px;
        box-shadow: inset 0 -0.0625rem 0.0625rem rgba(var(--rc-rgba-white), 0.3);
        width: 100%;
        background: var(--cc-sbcard-card__progressbar-bg);
      }
      .sb--card__progressbar > span {
        display: block;
        height: 100%;
        background-color: var(--cc-sbcard-card__progressbar-span-bg);
        background-image: -webkit-gradient(center bottom, var(--secondary-400), var(--secondary-200));
        box-shadow: inset 0 0.125rem 0.5625rem var(--gray-100), inset 0 -0.125rem 0.375rem rgba(var(--rc-rgba-black), 0.4);
        position: relative;
        overflow: hidden;
      }
      `,
    copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-card__progressbar-bg: var(--gray-100);
      --cc-sbcard-card__progressbar-span-bg: var(--secondary-200);
    }`
    },
    {
      expandCode: false,
      id: 'psection2',
      title: "My Course card(Web) - Recently Viewed",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course sb--card--recently-viewed" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <!-- card mobile view details -->
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course sb--card--recently-viewed" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
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
      .sb--card--recently-viewed .sb--card__img {
        height: 5.5rem;
        width: 5.5rem;
        flex: 0 0 5.5rem;
        margin: 0;
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
      .sb--card--course .sb--container-box {
        min-width: 0;
        flex: 1;
        padding-right: 0.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .sb--card--course .sb--container-box .sb--card__info {
        padding: 0rem 0rem 0rem 0rem;
        display: flex;
        align-items: center;
      }
      .sb--card__info {
        flex: 1;
        overflow: hidden;
      }
      [dir=ltr] .sb--card__info {
        padding-right: 0.5rem;
      }
      .sb--card--course .sb--container-box .sb--holder {
        flex: 1;
        min-width: 0;
      }
      .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
      .text-left {
        text-align: left !important;
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
      .sb--card--course .sb--card__meta1 {
        --cc-sbcard-meta1: var(--gray-400);
        color: var(--cc-sbcard-meta1);
        line-height: 1rem;
      }
      .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .sb--card--course .data_1 {
        max-width: 100% !important;
      }
      `,
      copyVar: `
      :root {
        --cc-sbcard-bg: var(--white);
        --cc-sbcard-img-container-bg: var(--gray-100);
        --cc-sbcard-meta-text: var(--gray-800);
      }`
    },
    {
      expandCode: false,
      id: 'psection3',
      title: "My Course card (Desktop)",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
        </div>
        <div class="sb--card__progressbar">
          <span [ngStyle]="fetchProgress()"></span>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
        </div>
        <div class="sb--card__progressbar">
          <span [ngStyle]="fetchProgress()"></span>
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
      .sb--card--course .sb--container-box {
        min-width: 0;
        flex: 1;
        padding-right: 0.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .sb--card--course .sb--container-box .sb--card__info {
        padding: 0rem 0rem 0rem 0rem;
        display: flex;
        align-items: center;
      }
      .sb--card__info {
        flex: 1;
        overflow: hidden;
      }
      [dir=ltr] .sb--card__info {
        padding-right: 0.5rem;
      }
      .sb--card--course .sb--container-box .sb--holder {
        flex: 1;
        min-width: 0;
      }
      .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
      .text-left {
        text-align: left !important;
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
      .sb--card--course .sb--card__meta1 {
        --cc-sbcard-meta1: var(--gray-400);
        color: var(--cc-sbcard-meta1);
        line-height: 1rem;
      }
      .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .sb--card--course .data_1 {
        max-width: 100% !important;
      }
      .sb--card--course .sb--card__meta_c_data {
        min-height: 2rem;
        padding: 0.5rem;
        background-color: var(--cc-sbcard-metaC-data);
        font-size: 0.8rem;
      }
      .sb--card__progressbar {
        height: 0.25rem;
        margin: 0px 0 0px;
        border-radius: 0px;
        box-shadow: inset 0 -0.0625rem 0.0625rem rgba(var(--rc-rgba-white), 0.3);
        width: 100%;
        background: var(--cc-sbcard-card__progressbar-bg);
      }
      .sb--card__progressbar > span {
        display: block;
        height: 100%;
        background-color: var(--cc-sbcard-card__progressbar-span-bg);
        background-image: -webkit-gradient(center bottom, var(--secondary-400), var(--secondary-200));
        box-shadow: inset 0 0.125rem 0.5625rem var(--gray-100), inset 0 -0.125rem 0.375rem rgba(var(--rc-rgba-black), 0.4);
        position: relative;
        overflow: hidden;
      }
      `,
      copyVar: `
      :root {
        --cc-sbcard-bg: var(--white);
        --cc-sbcard-img-container-bg: var(--gray-100);
        --cc-sbcard-meta-text: var(--gray-800);
        --cc-sbcard-metaC-data: var(--rc-FAFAFA);
        --cc-sbcard-card__progressbar-bg: var(--gray-100);
        --cc-sbcard-card__progressbar-span-bg: var(--secondary-200);
      }`
    },
    {
      expandCode: false,
      id: 'psection4',
      title: "My Course card (Desktop) - Recently Viewed",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course sb--card--recently-viewed" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course sb--card--recently-viewed" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
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
      .sb--card--recently-viewed .sb--card__img {
        height: 5.5rem;
        width: 5.5rem;
        flex: 0 0 5.5rem;
        margin: 0;
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
      .sb--card--course .sb--container-box {
        min-width: 0;
        flex: 1;
        padding-right: 0.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .sb--card--course .sb--container-box .sb--card__info {
        padding: 0rem 0rem 0rem 0rem;
        display: flex;
        align-items: center;
      }
      .sb--card__info {
        flex: 1;
        overflow: hidden;
      }
      [dir=ltr] .sb--card__info {
        padding-right: 0.5rem;
      }
      .sb--card--course .sb--container-box .sb--holder {
        flex: 1;
        min-width: 0;
      }
      .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
      .text-left {
        text-align: left !important;
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
      .sb--card--course .sb--card__meta1 {
        --cc-sbcard-meta1: var(--gray-400);
        color: var(--cc-sbcard-meta1);
        line-height: 1rem;
      }
      .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .sb--card--course .data_1 {
        max-width: 100% !important;
      }
      .sb--card--course .sb--card__meta_c_data {
        min-height: 2rem;
        padding: 0.5rem;
        background-color: var(--cc-sbcard-metaC-data);
        font-size: 0.8rem;
      }
      `,
      copyVar: `
      :root {
        --cc-sbcard-bg: var(--white);
        --cc-sbcard-img-container-bg: var(--gray-100);
        --cc-sbcard-meta-text: var(--gray-800);
      }`
    },
    {
      expandCode: false,
      id: 'psection5',
      title: "My Course card - Offline",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb--card sb--card--course sb--card--recently-viewed offline" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb--card sb--card--course sb--card--recently-viewed offline" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21278859656586035211271/artifact/1200x1023_1560751586952.thumb.jpg" alt="">
            </div>
          </div>
          <div class="sb--container-box">
            <div class="sb--card__info">
              <div class="sb--holder">
                <h4 class="sb--card__title sb__ellipsis  sb__ellipsis--three text-left" title="vk-allcontentcourse">vk-allcontentcourse</h4>
                <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title=""> <span>publishedByText : </span> Odisha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
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
      .sb--card--recently-viewed .sb--card__img {
        height: 5.5rem;
        width: 5.5rem;
        flex: 0 0 5.5rem;
        margin: 0;
      }
      .sb--card.offline .sb--card__img .img-container {
        display: flex;
        align-items: center;
        background-color: var(--cc-sbcard-offline-bg);
        opacity: 0.5;
      }
      .sb--card--recently-viewed .sb--card__img .img-container {
        display: flex;
        align-items: center;
        background-color: var(--cc-sbcard-rv-img-container-bg);
        height: 5.5rem;
        width: 5.5rem;
        border-radius: 0rem;
        justify-content: center
      }
      .sb--card.offline .sb--card__img .img-container img {
        margin: auto;
        font-size: 1.5rem;
        color: var(--cc-sbcard-offline-img-text);
      }
      .sb--card__img .img-container img {
        max-width: 100%;
      }
      .sb--card--course.sb--card--recently-viewed .sb--container-box {
        padding: 0.5rem !important;
      }
      .sb--card--course .sb--container-box {
        min-width: 0;
        flex: 1;
        padding-right: 0.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .sb--card__info {
        flex: 1;
        overflow: hidden;
      }
      [dir=ltr] .sb--card__info {
        padding-right: 0.5rem;
      }
      .sb--card.offline .sb--card__info, .sb--card.offline .sb--card__moreinfo {
        opacity: 0.5;
      }
      .sb--card--course .sb--container-box .sb--card__info {
        padding: 0rem 0rem 0rem 0rem;
        display: flex;
        align-items: center;
      }
      .sb--card--course .sb--container-box .sb--holder {
        flex: 1;
        min-width: 0;
      }
      .sb--card__title {
          color: var(--cc-sbcard-title);
          font-size: 0.875rem;
          margin: 0px;
          line-height: normal;
      }
      .sb__ellipsis--three {
          -webkit-line-clamp: 3;
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
      .sb--card--course .sb--card__meta1 {
        color: var(--cc-sbcard-meta1);
        line-height: 1rem;
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
      .text-left {
          text-align: left !important;
      }
      .sb--card--course .data_1 {
        max-width: 100% !important;
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
        .sb--card--course.sb--card--recently-viewed .sb--card__meta_c_data {
          min-height: 1rem !important;
      }
      
      .sb--card--course .sb--card__meta_c_data {
          min-height: 2rem;
          padding: 0.5rem;
          background-color: var(--cc-sbcard-metaC-data);
          font-size: 0.8rem;
      }
      `,
      copyVar: `
      :root {
        --cc-sbcard-bg: var(--white);
        --cc-sbcard-offline-bg: var(--tertiary-color);
        --cc-sbcard-rv-img-container-bg: var(--gray-100);
        --cc-sbcard-offline-img-text: var(--white);
        --cc-sbcard-meta-text: var(--gray-800);
        --cc-sbcard-meta1: var(--gray-400);
        --cc-sbcard-metaC-data: var(--rc-FAFAFA);
      }`
    },
  ];

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
