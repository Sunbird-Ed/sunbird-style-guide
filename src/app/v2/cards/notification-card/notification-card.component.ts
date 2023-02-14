


import { Component, OnInit } from '@angular/core';
import { HighlightResult } from "ngx-highlightjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss']
})

export class NotificationCardComponent implements OnInit {

  constructor(private router: Router) { }
  currentSection = 'psection1';
  
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  pageTitle = "Notification Card";
  sections = [
    {
      expandCode: false,
      id: 'psection1',
      title: "Notification Card - Basic",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
            <div class="date ml-8">Tue, 24 January 12:21</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="ml-12 notification-content">
            <div class="title">InApp Notification 4</div>
            <div class="sub-title py-8">Notfication description</div>
          </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
            <div class="date ml-8">Tue, 24 January 12:21</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="ml-12 notification-content">
            <div class="title">InApp Notification 4</div>
            <div class="sub-title py-8">Notfication description</div>
          </div>
        </div>
      </div>
      `,
      copyCSS: `
      .sb-notification-list {
        border-radius: 0.5rem;
        background-color: var(--cc-notification-list-bg);
        box-shadow: 0.3125rem 0.3125rem 0.125rem 0 rgba(var(--rc-rgba-black), 0.1);
        margin-bottom: 0.5rem;
        border: 0.03125rem solid var(--cc-notification-list-br);
      }
      .sb-notification-list .sb-notification-list-header .notification-info .date {
        color: var(--cc-notification-date-text);
        font-size: 0.75rem;
      }
      .sb-notification-list .sb-notification-list-header .delete-icon .Delete-red {
        display: none;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-red {
        display: block;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-gray {
        display: none;
      }
      .sb-notification-list .sb-notification-data .notification-content {
        overflow: hidden;
      }
      .sb-notification-list .sb-notification-data .notification-content .title {
        color: var(--cc-notification-title-text);
        font-size: 0.875rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sb-notification-list .sb-notification-data .notification-content .sub-title {
        color: var(--cc-notification-subtitle-text);
        font-size: 0.75rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      `,
      copyVar: `
      :root {
        --cc-notification-list-bg: var(--white);
        --cc-notification-list-br: var(--rc-dddddd);
        --cc-notification-date-text: var(--gray-200);
        --cc-notification-title-text: var(--gray-400);
        --cc-notification-subtitle-text: var(--gray-400);
      }
    `
    },
    {
      expandCode: false,
      id: 'psection2',
      title: "Notification Card with Thumbnail/Profile Icon",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
            <div class="date ml-8">Tue, 27 December 10:13</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="logo">
            <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
          </div>
          <div class="ml-12 notification-content">
            <div class="title">Ak 5.1 completion courseees</div>
            <div class="sub-title py-8">Notfication description</div>
          </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
            <div class="date ml-8">Tue, 27 December 10:13</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="logo">
            <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
          </div>
          <div class="ml-12 notification-content">
            <div class="title">Ak 5.1 completion courseees</div>
            <div class="sub-title py-8">Notfication description</div>
          </div>
        </div>
      </div>
      `,
      copyCSS: `
      .sb-notification-list {
        border-radius: 0.5rem;
        background-color: var(--cc-notification-list-bg);
        box-shadow: 0.3125rem 0.3125rem 0.125rem 0 rgba(var(--rc-rgba-black), 0.1);
        margin-bottom: 0.5rem;
        border: 0.03125rem solid var(--cc-notification-list-br);
      }
      .sb-notification-list .sb-notification-list-header .notification-info .date {
        color: var(--cc-notification-date-text);
        font-size: 0.75rem;
      }
      .sb-notification-list .sb-notification-list-header .delete-icon .Delete-red {
        display: none;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-red {
        display: block;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-gray {
        display: none;
      }
      .sb-notification-list .sb-notification-data .notification-content {
        overflow: hidden;
      }
      .sb-notification-list .sb-notification-data .notification-content .title {
        color: var(--cc-notification-title-text);
        font-size: 0.875rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sb-notification-list .sb-notification-data .notification-content .sub-title {
        color: var(--cc-notification-subtitle-text);
        font-size: 0.75rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sb-notification-list .sb-notification-data .logo {
        height: 2rem;
        width: 2rem;
        border-radius: 0.5rem;
        background-color: var(--cc-notification-logo-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sb-notification-list .sb-notification-data .logo img {
        height: 1.5rem;
        max-width: 1.25rem;
      }
      `,
      copyVar: `
      :root {
        --cc-notification-list-bg: var(--white);
        --cc-notification-list-br: var(--rc-dddddd);
        --cc-notification-date-text: var(--gray-200);
        --cc-notification-title-text: var(--gray-400);
        --cc-notification-subtitle-text: var(--gray-400);
        --cc-notification-logo-bg:var(--gray-0);
      }
    `
    },
    {
      expandCode: false,
      id: 'psection3',
      title: "Notification Card - Unread Notification",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
          <div class="status"></div>
            <div class="date ml-8">Mon, 13 February 13:13</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="logo">
            <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
          </div>
          <div class="ml-12 notification-content">
            <div class="title active"> 4.5 No cert Course has been assigned to test group by sdsdsd1</div>
            <div class="sub-title py-8">Notfication description</div>
          </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
          <div class="status"></div>
            <div class="date ml-8">Mon, 13 February 13:13</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="logo">
            <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
          </div>
          <div class="ml-12 notification-content">
            <div class="title active"> 4.5 No cert Course has been assigned to test group by sdsdsd1</div>
            <div class="sub-title py-8">Notfication description</div>
          </div>
        </div>
      </div>
      `,
      copyCSS: `
      .sb-notification-list {
        border-radius: 0.5rem;
        background-color: var(--cc-notification-list-bg);
        box-shadow: 0.3125rem 0.3125rem 0.125rem 0 rgba(var(--rc-rgba-black), 0.1);
        margin-bottom: 0.5rem;
        border: 0.03125rem solid var(--cc-notification-list-br);
      }
      .sb-notification-list .sb-notification-list-header .notification-info .date {
        color: var(--cc-notification-date-text);
        font-size: 0.75rem;
      }
      .sb-notification-list .sb-notification-list-header .delete-icon .Delete-red {
        display: none;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-red {
        display: block;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-gray {
        display: none;
      }
      .sb-notification-list .sb-notification-data .notification-content {
        overflow: hidden;
      }
      .sb-notification-list .sb-notification-data .notification-content .title {
        color: var(--cc-notification-title-text);
        font-size: 0.875rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sb-notification-list .sb-notification-data .notification-content .sub-title {
        color: var(--cc-notification-subtitle-text);
        font-size: 0.75rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sb-notification-list .sb-notification-data .logo {
        height: 2rem;
        width: 2rem;
        border-radius: 0.5rem;
        background-color: var(--cc-notification-logo-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sb-notification-list .sb-notification-data .logo img {
        height: 1.5rem;
        max-width: 1.25rem;
      }
      .sb-notification-list .sb-notification-data .notification-content .title.active {
        color: var(--cc-notification-title-active);
      }
      .sb-notification-list .sb-notification-list-header .notification-info .status {
        height: 0.5rem;
        width: 0.5rem;
        background-color: var(--orange);
        border-radius: 0.5rem;
      }
      `,
      copyVar: `
      :root {
        --cc-notification-list-bg: var(--white);
        --cc-notification-list-br: var(--rc-dddddd);
        --cc-notification-date-text: var(--gray-200);
        --cc-notification-title-text: var(--gray-400);
        --cc-notification-subtitle-text: var(--gray-400);
        --cc-notification-logo-bg:var(--gray-0);
        --cc-notification-status-bg:var(--gray-200);
        --cc-notification-title-active:var(--primary-color);
      }
    `
    },
    {
      expandCode: false,
      id: 'psection4',
      title: "Notification Card - Mobile",
      description: ``,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
            <div class="date ml-8">Mon, 13 February 13:13</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="logo">
            <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
          </div>
          <div class="ml-12 notification-content">
            <div class="title"> 4.5 No cert Course has been assigned to test group by sdsdsd1</div>
          </div>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb-notification-list p-8" tabindex="0">
        <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
          <div class="notification-info d-flex flex-ai-center mb-8">
            <div class="date ml-8">Mon, 13 February 13:13</div>
          </div>
          <div class="delete-icon" tabindex="0">
            <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
            <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
          </div>
        </div>
        <div class="sb-notification-data d-flex flex-ai-center">
          <div class="logo">
            <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
          </div>
          <div class="ml-12 notification-content">
            <div class="title"> 4.5 No cert Course has been assigned to test group by sdsdsd1</div>
          </div>
        </div>
      </div>
      `,
      copyCSS: `
      .sb-notification-list {
        border-radius: 0.5rem;
        background-color: var(--cc-notification-list-bg);
        box-shadow: 0.3125rem 0.3125rem 0.125rem 0 rgba(var(--rc-rgba-black), 0.1);
        margin-bottom: 0.5rem;
        border: 0.03125rem solid var(--cc-notification-list-br);
      }
      .sb-notification-list .sb-notification-list-header .notification-info .date {
        color: var(--cc-notification-date-text);
        font-size: 0.75rem;
      }
      .sb-notification-list .sb-notification-list-header .delete-icon .Delete-red {
        display: none;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-red {
        display: block;
      }
      .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-gray {
        display: none;
      }
      .sb-notification-list .sb-notification-data .notification-content {
        overflow: hidden;
      }
      .sb-notification-list .sb-notification-data .notification-content .title {
        color: var(--cc-notification-title-text);
        font-size: 0.875rem;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sb-notification-list .sb-notification-data .logo {
        height: 2rem;
        width: 2rem;
        border-radius: 0.5rem;
        background-color: var(--cc-notification-logo-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sb-notification-list .sb-notification-data .logo img {
        height: 1.5rem;
        max-width: 1.25rem;
      }
      `,
      copyVar: `
      :root {
        --cc-notification-list-bg: var(--white);
        --cc-notification-list-br: var(--rc-dddddd);
        --cc-notification-date-text: var(--gray-200);
        --cc-notification-title-text: var(--gray-400);
        --cc-notification-logo-bg:var(--gray-0);
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
