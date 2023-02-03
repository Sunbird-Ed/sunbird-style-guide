import { Component, OnInit } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(private router: Router) { }
  currentSection = 'psection1';
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  pageTitle = "Group Card";
  sections = [
    {
      expandCode: false,
      id:'psection1',
      title: "Basic card",
      description:`The css3 varaiables can be replaced with your supported theme colors.</p>`,
      url:"https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left ml-16" title="group?.name">group?.name</div>
      </div>
    </div>`,
      copyCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left ml-16" title="group?.name">group?.name</div>
      </div>
    </div>`,
    copyCSS: `.sb--card {
      background-color: var(--cc-sbcard-bg);
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
    }`,
    copyVar: `:root {
  --cc-sbcard-bg: var(--white);
  --cc-sbcard-title: var(--primary-color);
    }`
    },
    {
      expandCode: false,
      id:'psection2',
      title: "Basic card with Thumbnail/Profile Icon",
      description:"",
      url:"https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
      demoCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
          </div>
        </div>
      </div>
      </div>`,
      copyCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
          </div>
        </div>
      </div>
      </div>`,
    copyCSS: `.sb--card {
      background-color: var(--cc-sbcard-bg);
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container {
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info { }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }`,
    copyVar: `:root {
--cc-sbcard-bg: var(--white);
--rc-rgba-black:0, 0, 0;
--cc-sbcard-title: var(--primary-color);
--cc-sbcard-img-container-bg:#ccc;
}`
    },
    {
      expandCode: false,
      id:'psection3',
      title: "Group Card (Admin) & suspend",
      description:"",
      url:"https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
      demoCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
            <div class="img-container--badge">suspend</div>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
        </div>
      </div>
      </div>`,
      copyCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
            <div class="img-container--badge">suspend</div>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
        </div>
      </div>
      </div>`,
    copyCSS: `.sb--card {
      background-color: var(--cc-sbcard-bg);
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container {
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info { }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .sb--card__img .img-container {
      border-radius: 0.5rem;
    }
    .sb-label-badge {
      font-size: 0.6875rem;
      border: 1px solid var(--cc-sblabel-badge-br);
      padding: 0.25rem 0.5rem;
      border-radius: 0.125rem;
      color: var(--cc-sblabel-badge-text);
      margin: 0 0.5rem 0 0.5rem;
  }`,
    copyVar: `:root {
    --cc-sbcard-bg: var(--white);
    --cc-sbcard-title: var(--primary-color);
    --rc-rgba-black:0, 0, 0;
    --cc-sbcard-img-container-bg: var(--gray-100);
    --cc-sbcard-meta-text: var(--gray-800);
    --cc-sbcard-img-label: #284C3F;
    --cc-sbcard-img-label-bg: #B3EBD7;
    // suspended, admin styles
    --cc-sbcard-img-badge-bg: var(--black);
    --cc-sbcard-img-badge-text: var(--white);
    --cc-sblabel-badge-br: var(--secondary-color);
    --cc-sblabel-badge-text: var(--secondary-color);
    }`
    },
    {
      expandCode: false,
      id:'psection4',
      title: "Group Card (Mobile)",
      description:"",
      url:"https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
      demoCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
            <div class="sb--card__meta2 text-left p-0 pt-4">
              <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
            </div>
        </div>
      </div>
      </div>`,
      copyCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
            <div class="sb--card__meta2 text-left p-0 pt-4">
              <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
            </div>
        </div>
      </div>
      </div>`,
    copyCSS: `.sb--card {
      background-color: var(--cc-sbcard-bg);
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container {
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info { }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      min-height: 3.5rem;
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
    }
    .sb--card__img .img-container {
      border-radius: 0.5rem;
    }`,
    copyVar: `:root {
      --cc-sbcard-bg: var(--white);
    --cc-sbcard-img-container-bg: var(--gray-100);
    --cc-sbcard-title: var(--primary-color);
    --cc-sbcard-meta-text: var(--gray-800);
    --cc-sbcard-dot-divider: var(--gray-200);
    --cc-sbcard-moreinfo-bg: none; //var(--rc-FAFAFA);
    --cc-sbcard-moreinfo-bordertop: #cacbce;
    --cc-sbcard-meta2-text: var(--gray-800);
    --cc-sbcard-rv-img-container-bg: var(--gray-100);
    --cc-sbcard-selected-border: var(--primary-color);
    --cc-sbcard-selected-bg:rgba(2, 79, 157, 0.2);
    --cc-sbcard-img-label: #284C3F;
    --cc-sbcard-img-label-bg: #B3EBD7;
    --cc-sbcard-img-badge-bg: var(--black);
    --cc-sbcard-img-badge-text: var(--white);
    --cc-sblabel-badge-br: var(--secondary-color);
    --cc-sblabel-badge-text: var(--secondary-color);
    }`
    },
    {
      expandCode: false,
      id:'psection5',
      title: "Group Card (Web)",
      description:"",
      url:"https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
      demoCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
        </div>
      </div>
      <div class="sb--card__moreinfo">
        <div class="sb--card__meta2 text-left">
          <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
        </div>
      </div>
      </div>`,
      copyCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
        </div>
      </div>
      <div class="sb--card__moreinfo">
        <div class="sb--card__meta2 text-left">
          <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
        </div>
      </div>
      </div>`,
    copyCSS: `.sb--card {
      background-color: var(--cc-sbcard-bg);
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container {
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info { }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
    .sb--card .data_1 {
      max-width: 50%;
    }
    .sb--card .data_2 {
      flex: 1;
    }
    .sb--card .dot-divider {
      width: 0.25rem;
      height: 0.25rem;
      background-color: var(--cc-sbcard-dot-divider);
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      min-height: 3.5rem;
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
    }
    .sb--card__org {
      color: var(--cc-sbcard-org-text);
    }
    .sb--card__badge img {
      width: 1.25rem;
      height: 1.25rem;
    }
    .sb--card__type {
      background: var(--cc-sbcard-type-bg);
      height: 1.25rem;
      color: var(--cc-sbcard-type-text);
      font-size: 0.6875rem;
    }
    .sb--card__type:before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
    }
    html[dir=rtl] .sb--card__type:before {
      border-color: var(--cc-sbcard-type-br) transparent var(--cc-sbcard-type-br) var(--cc-sbcard-type-br);
    }
    .sb--card--recently-viewed .sb--card__img {
      height: 5.5rem;
      width: 5.5rem;
    }
    .sb--card--recently-viewed .sb--card__img .img-container {
      background-color: var(--cc-sbcard-rv-img-container-bg);
      height: 5.5rem;
      width: 5.5rem;
    }
    .sb--card__img .img-container {
      border-radius: 0.5rem;
    }
    .sb--card.selected {
      border: 1px solid var(--cc-sbcard-selected-border);
      border-radius: 4px;
      background-color: var(--cc-sbcard-selected-bg);
    }
    .sb--card.offline .sb--card__img .img-container {
      background-color: var(--cc-sbcard-offline-bg);
    }
    .sb--card.offline .sb--card__img .img-container img {
      font-size: 1.5rem;
      color: var(--cc-sbcard-offline-img-text);
    }
    .sb--card.offline .sb--card__info,
    .sb--card.offline .sb--card__moreinfo {
    }`,
    copyVar: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-dot-divider: var(--gray-200);
      --cc-sbcard-moreinfo-bg: none; //var(--rc-FAFAFA);
      --cc-sbcard-moreinfo-bordertop: #cacbce;
      --cc-sbcard-meta2-text: var(--gray-800);
      --cc-sbcard-org-text: var(--gray-200);
      --cc-sbcard-type-bg: var(--black);
      --cc-sbcard-type-text: var(--white);
      --cc-sbcard-rv-img-container-bg: var(--gray-100);
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg:rgba(2, 79, 157, 0.2);
      --cc-sbcard-offline-bg: var(--tertiary-color);
      --cc-sbcard-offline-img-text: var(--white);
      --cc-sbcard-card__progressbar-bg: var(--gray-100);
      --cc-sbcard-card__progressbar-span-bg: var(--secondary-200);
      --cc-sbcard-type-br:var(--black);
      --cc-sbcard-img-br:var(--white);
      --sbt-pill-hs: 212, 100%;
      --cc-sbcard-data2-bg: #E5EDF5;
      --cc-sbcard-data2-bg-active: #0076FE;
      --cc-sbcard-data1-bg: #0d0312;
      --cc-sbcard-data1-bg-active:#6236FF;
      --cc-sbcard-data0-bg: #E0F5EA;
      --cc-sbcard-data0-bg-active:#008840;
      --cc-sbcard-img-label: #284C3F;
      --cc-sbcard-img-label-bg: #B3EBD7;
      --cc-sbcard-img-badge-bg: var(--black);
      --cc-sbcard-img-badge-text: var(--white);
      --cc-sblabel-badge-br: var(--secondary-color);
      --cc-sblabel-badge-text: var(--secondary-color);
    }`
    },
    {
      expandCode: false,
      id:'psection6',
      title: "Group Card (Web) - 'Selected'",
      description:"",
      url:"https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
      demoCode: `<div class="sb--card selected" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
        </div>
      </div>
      <div class="sb--card__moreinfo">
        <div class="sb--card__meta2 text-left">
          <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
        </div>
      </div>
      </div>`,
      copyCode: `<div class="sb--card selected" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">`,
    copyCSS: `.sb--card {
      background-color: var(--cc-sbcard-bg);
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container {
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info { }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
    .sb--card .data_1 {
      max-width: 50%;
    }
    .sb--card .data_2 {
      flex: 1;
    }
    .sb--card .dot-divider {
      width: 0.25rem;
      height: 0.25rem;
      background-color: var(--cc-sbcard-dot-divider);
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      min-height: 3.5rem;
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
    }
    .sb--card__org {
      color: var(--cc-sbcard-org-text);
    }
    .sb--card__badge img {
      width: 1.25rem;
      height: 1.25rem;
    }
    .sb--card__type {
      background: var(--cc-sbcard-type-bg);
      height: 1.25rem;
      color: var(--cc-sbcard-type-text);
      font-size: 0.6875rem;
    }
    .sb--card__type:before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
    }
    html[dir=rtl] .sb--card__type:before {
      border-color: var(--cc-sbcard-type-br) transparent var(--cc-sbcard-type-br) var(--cc-sbcard-type-br);
    }
    .sb--card--recently-viewed .sb--card__img {
      height: 5.5rem;
      width: 5.5rem;
    }
    .sb--card--recently-viewed .sb--card__img .img-container {
      background-color: var(--cc-sbcard-rv-img-container-bg);
      height: 5.5rem;
      width: 5.5rem;
    }
    .sb--card__img .img-container {
      border-radius: 0.5rem;
    }
    .sb--card.selected {
      border: 1px solid var(--cc-sbcard-selected-border);
      border-radius: 4px;
      background-color: var(--cc-sbcard-selected-bg);
    }`,
    copyVar: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-dot-divider: var(--gray-200);
      --cc-sbcard-moreinfo-bg: none; //var(--rc-FAFAFA);
      --cc-sbcard-moreinfo-bordertop: #cacbce;
      --cc-sbcard-meta2-text: var(--gray-800);
      --cc-sbcard-org-text: var(--gray-200);
      --cc-sbcard-type-bg: var(--black);
      --cc-sbcard-type-text: var(--white);
      --cc-sbcard-rv-img-container-bg: var(--gray-100);
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg:rgba(2, 79, 157, 0.2);
      --cc-sbcard-type-br:var(--black);
      --cc-sbcard-img-br:var(--white);
    }`
    },
    {
      expandCode: false,
      title: "Group Card (Web) - 'Offline'",
      description:"",
      url:"https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
      demoCode: `<div class="sb--card offline" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__img">
          <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
            <label>AB</label>
          </div>
        </div>
        <div class="sb--card__info">
          <div class="d-flex flex-dr flex-jc-space-between">
            <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
            <div class="sb-label-badge">Admin</div>
          </div>
        </div>
      </div>
      <div class="sb--card__moreinfo">
        <div class="sb--card__meta2 text-left">
          <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
        </div>
      </div>
      </div>`,
      copyCode: `<div class="sb--card offline" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">`,
    copyCSS: `.sb--card {
      background-color: var(--cc-sbcard-bg);
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container {
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info { }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 0.75rem;
      line-height: 1.25rem;
    }
    .sb--card .data_1 {
      max-width: 50%;
    }
    .sb--card .data_2 {
      flex: 1;
    }
    .sb--card .dot-divider {
      width: 0.25rem;
      height: 0.25rem;
      background-color: var(--cc-sbcard-dot-divider);
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      min-height: 3.5rem;
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
    }
    .sb--card__org {
      color: var(--cc-sbcard-org-text);
    }
    .sb--card__badge img {
      width: 1.25rem;
      height: 1.25rem;
    }
    .sb--card__type {
      background: var(--cc-sbcard-type-bg);
      height: 1.25rem;
      color: var(--cc-sbcard-type-text);
      font-size: 0.6875rem;
    }
    .sb--card__type:before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
    }
    html[dir=rtl] .sb--card__type:before {
      border-color: var(--cc-sbcard-type-br) transparent var(--cc-sbcard-type-br) var(--cc-sbcard-type-br);
    }
    .sb--card--recently-viewed .sb--card__img {
      height: 5.5rem;
      width: 5.5rem;
    }
    .sb--card--recently-viewed .sb--card__img .img-container {
      background-color: var(--cc-sbcard-rv-img-container-bg);
      height: 5.5rem;
      width: 5.5rem;
    }
    .sb--card__img .img-container {
      border-radius: 0.5rem;
    }
    .sb--card.offline .sb--card__img .img-container {
      background-color: var(--cc-sbcard-offline-bg);
    }
    .sb--card.offline .sb--card__img .img-container img {
      font-size: 1.5rem;
      color: var(--cc-sbcard-offline-img-text);
    }
    .sb--card.offline .sb--card__info,
    .sb--card.offline .sb--card__moreinfo {
    }`,
    copyVar: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-dot-divider: var(--gray-200);
      --cc-sbcard-moreinfo-bg: none; //var(--rc-FAFAFA);
      --cc-sbcard-moreinfo-bordertop: #cacbce;
      --cc-sbcard-meta2-text: var(--gray-800);
      --cc-sbcard-org-text: var(--gray-200);
      --cc-sbcard-type-bg: var(--black);
      --cc-sbcard-type-text: var(--white);
      --cc-sbcard-rv-img-container-bg: var(--gray-100);
      --cc-sbcard-offline-bg: var(--tertiary-color);
      --cc-sbcard-offline-img-text: var(--white);
      --cc-sbcard-card__progressbar-bg: var(--gray-100);
      --cc-sbcard-card__progressbar-span-bg: var(--secondary-200);
      --cc-sbcard-type-br:var(--black);
      --cc-sbcard-img-br:var(--white);
    }`
    }
  ];

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }


  // goToLink(url: string) {
  //   window.open(url, "_blank");
  // }

  // goToPage(url: string) {
  //   window.location.href = url;
  // }

  ngOnInit(): void {
  }

}
