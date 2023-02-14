import { Component, OnInit, Injectable } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {


  constructor(private router: Router) { }


  // currentSection = 'psection1';

  // onSectionChange(sectionId: string) {
  //   this.currentSection = sectionId;
  // }

  // scrollTo(psection) {
  //   document.querySelector('#' + psection)
  //   .scrollIntoView();
  // }



  pageTitle = "Group Card";
  sections = [
    {
      expandCode: false,
      id: 'psection1',
      title: "Basic card",
      description: `The css3 varaiables can be replaced with your supported theme colors.</p>`,
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
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
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
    }`,
      copyVar: `:root {
  --cc-sbcard-bg: var(--white);
  --cc-sbcard-title: var(--primary-color);
  --rc-rgba-black: 0, 0, 0;
    }`
    },
    {
      expandCode: false,
      id: 'psection2',
      title: "Basic card with Thumbnail/Profile Icon",
      description: "",
      url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
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
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
    [dir=ltr] .sb--card__info {
      padding-right: 0.5rem;
    }
    
    [dir=rtl] .sb--card__info {
      padding-left: 0.5rem;
    }`,
      copyVar: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --rc-rgba-black: 0, 0, 0;
      /* group card */
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
      id: 'psection3',
      title: "Group Card (Admin) & suspend",
      description: "",
      url: "https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
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
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
    [dir=ltr] .sb--card__info {
      padding-right: 0.5rem;
    }
    
    [dir=rtl] .sb--card__info {
      padding-left: 0.5rem;
    }
    .sb--card__img .img-container--label {
      text-transform: capitalize;
      background-color: var(--cc-sbcard-img-label-bg);
      color: var(--cc-sbcard-img-label);
      position: relative;
    }
    .sb--card__img .img-container--label label {
      margin-bottom: 0px;
      padding-bottom: 0px;
      font-size: 1.3125rem;
      font-weight: bold;
    }
    .sb--card__img .img-container--label .img-container--badge {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: var(--cc-sbcard-img-badge-bg);
      color: var(--cc-sbcard-img-badge-text);
      font-size: 0.75rem;
      text-align: center;
      margin-bottom: 0.5rem;
      line-height: normal;
      opacity: 0.6;
    }
    
    .sb-label-badge {
      font-size: 0.6875rem;
      border: 1px solid var(--cc-sblabel-badge-br);
      align-self: center;
      padding: 0.25rem 0.5rem;
      border-radius: 0.125rem;
      color: var(--cc-sblabel-badge-text);
      text-align: center;
    }`,
      copyVar: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      /* group card */
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
      id: 'psection4',
      title: "Group Card (Mobile)",
      description: "",
      url: "https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
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
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
    [dir=ltr] .sb--card__info {
      padding-right: 0.5rem;
    }
    
    [dir=rtl] .sb--card__info {
      padding-left: 0.5rem;
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
    .sb--card .data_2 {
      flex: 1;
    }
    .sb--card .dot-divider {
      width: 0.25rem;
      height: 0.25rem;
      min-width: 0.25rem;
      max-width: 0.25rem;
      min-height: 0.25rem;
      max-height: 0.25rem;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 0.5rem;
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      border-top: 0px solid var(--cc-sbcard-moreinfo-bordertop);
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
      line-height: 0.875rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0.5rem;
    }
    .sb--card__meta2_data .label {
      font-weight: normal;
    }
    .sb--card__meta2_data .value {
      font-weight: bold;
    }
    .sb--card__org {
      color: var(--cc-sbcard-org-text);
    }
    .sb--card__tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
    .sb--card__badge {
      display: flex;
      margin-right: 0.5rem;
    }
    html[dir=rtl] .sb--card__badge {
      margin-right: 0;
      margin-left: 0.5rem;
    }
    .sb--card__badge img {
      width: 1.25rem;
      height: 1.25rem;
    }
    
    .sb--card:hover .card-hover,
    .sb--card:focus-within .card-hover {
      opacity: 1;
      z-index: 1001;
      display: block;
    }
    .sb--card:hover .card-hover .child-content,
    .sb--card:focus-within .card-hover .child-content {
      --cc-sbcard-hover-text: var(--white);
      --cc-sbcard-hover-bg: var(--primary-color);
      color: var(--cc-sbcard-hover-text);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.95;
      border-radius: 0.125rem;
      background-color: var(--cc-sbcard-hover-bg);
      z-index: 1;
      display: flex;
      align-items: center;
      transition: 0.2s ease-in;
      flex-direction: column;
      justify-content: space-evenly;
    }
    
    /* group card */
    .sb--card__img .img-container--label {
      text-transform: capitalize;
      background-color: var(--cc-sbcard-img-label-bg);
      color: var(--cc-sbcard-img-label);
      position: relative;
    }
    .sb--card__img .img-container--label label {
      margin-bottom: 0px;
      padding-bottom: 0px;
      font-size: 1.3125rem;
      font-weight: bold;
    }
    .sb--card__img .img-container--label .img-container--badge {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: var(--cc-sbcard-img-badge-bg);
      color: var(--cc-sbcard-img-badge-text);
      font-size: 0.75rem;
      text-align: center;
      margin-bottom: 0.5rem;
      line-height: normal;
      opacity: 0.6;
    }
    
    .sb-label-badge {
      font-size: 0.6875rem;
      border: 1px solid var(--cc-sblabel-badge-br);
      align-self: center;
      padding: 0.25rem 0.5rem;
      border-radius: 0.125rem;
      color: var(--cc-sblabel-badge-text);
      text-align: center;
    }`,
      copyVar: `:root {
      --cc-sbcard-bg: var(--white);
  --cc-sbcard-img-container-bg: var(--gray-100);
  --cc-sbcard-title: var(--primary-color);
  --cc-sbcard-meta-text: var(--gray-800);
  --cc-sbcard-dot-divider: var(--gray-200);
  --cc-sbcard-moreinfo-bg: none;
  --cc-sbcard-moreinfo-bordertop: #cacbce;
  --cc-sbcard-meta2-text: var(--gray-800);
  --cc-sbcard-org-text: var(--gray-200);
  --cc-sbcard-type-bg: var(--gray-200);
  --cc-sbcard-type-text: var(--white);
  --cc-sbcard-rv-img-container-bg: var(--gray-100);
  --cc-sbcard-type-br: var(--gray-200);
  /* group card */
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
      id: 'psection5',
      title: "Group Card (Web)",
      description: "",
      url: "https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
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
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__title {
        color: var(--cc-sbcard-title);
        font-size: 0.875rem;
        margin: 0px;
        line-height: normal;
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
    [dir=ltr] .sb--card__info {
      padding-right: 0.5rem;
    }
    
    [dir=rtl] .sb--card__info {
      padding-left: 0.5rem;
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
    .sb--card .data_2 {
      flex: 1;
    }
    .sb--card .dot-divider {
      width: 0.25rem;
      height: 0.25rem;
      min-width: 0.25rem;
      max-width: 0.25rem;
      min-height: 0.25rem;
      max-height: 0.25rem;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 0.5rem;
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      border-top: 0px solid var(--cc-sbcard-moreinfo-bordertop);
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
      line-height: 0.875rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0.5rem;
    }
    .sb--card__meta2_data .label {
      font-weight: normal;
    }
    .sb--card__meta2_data .value {
      font-weight: bold;
    }
    .sb--card__org {
      color: var(--cc-sbcard-org-text);
    }
    .sb--card__tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
    .sb--card__badge {
      display: flex;
      margin-right: 0.5rem;
    }
    html[dir=rtl] .sb--card__badge {
      margin-right: 0;
      margin-left: 0.5rem;
    .sb--card__badge img {
      width: 1.25rem;
      height: 1.25rem;
    }
   
    .sb--card:hover .card-hover,
    .sb--card:focus-within .card-hover {
      opacity: 1;
      z-index: 1001;
      display: block;
    }
    .sb--card:hover .card-hover .child-content,
    .sb--card:focus-within .card-hover .child-content {
      --cc-sbcard-hover-text: var(--white);
      --cc-sbcard-hover-bg: var(--primary-color);
      color: var(--cc-sbcard-hover-text);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.95;
      border-radius: 0.125rem;
      background-color: var(--cc-sbcard-hover-bg);
      z-index: 1;
      display: flex;
      align-items: center;
      transition: 0.2s ease-in;
      flex-direction: column;
      justify-content: space-evenly;
    }
    
    /* group card */
    .sb--card__img .img-container--label {
      text-transform: capitalize;
      background-color: var(--cc-sbcard-img-label-bg);
      color: var(--cc-sbcard-img-label);
      position: relative;
    }
    .sb--card__img .img-container--label label {
      margin-bottom: 0px;
      padding-bottom: 0px;
      font-size: 1.3125rem;
      font-weight: bold;
    }
    .sb--card__img .img-container--label .img-container--badge {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: var(--cc-sbcard-img-badge-bg);
      color: var(--cc-sbcard-img-badge-text);
      font-size: 0.75rem;
      text-align: center;
      margin-bottom: 0.5rem;
      line-height: normal;
      opacity: 0.6;
    }
    
    .sb-label-badge {
      font-size: 0.6875rem;
      border: 1px solid var(--cc-sblabel-badge-br);
      align-self: center;
      padding: 0.25rem 0.5rem;
      border-radius: 0.125rem;
      color: var(--cc-sblabel-badge-text);
      text-align: center;
    }`,
      copyVar: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-dot-divider: var(--gray-200);
      --cc-sbcard-moreinfo-bg: none;
      --cc-sbcard-moreinfo-bordertop: #cacbce;
      --cc-sbcard-meta2-text: var(--gray-800);
      --cc-sbcard-org-text: var(--gray-200);
      --cc-sbcard-type-bg: var(--gray-200);
      --cc-sbcard-type-text: var(--white);
      --cc-sbcard-rv-img-container-bg: var(--gray-100);
      --cc-sbcard-type-br: var(--gray-200);
      /* group card */
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
      id: 'psection6',
      title: "Group Card (Web) - 'Selected'",
      description: "",
      url: "https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
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
      copyCode: `<div class="sb--card selected" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <!-- add "selected" class next to the 'sb--card' class -->`,
      copyCSS: `.sb--card.selected {
      border: 0.063rem solid var(--cc-sbcard-selected-border);
      border-radius: 0.25rem;
      background-color: var(--cc-sbcard-selected-bg);
    }`,
      copyVar: `:root {
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg: rgba(2, 79, 157, 0.2);
    }`
    },
    {
      expandCode: false,
      title: "Group Card (Web) - 'Offline'",
      description: "",
      url: "https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
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
      copyCode: `<div class="sb--card offline" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <!-- add "offline" class next to the 'sb--card' class --> `,
      copyCSS: `.sb--card.offline .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-offline-bg);
      opacity: 0.5;
    }
    .sb--card.offline .sb--card__img .img-container img {
      margin: auto;
      font-size: 1.5rem;
      color: var(--cc-sbcard-offline-img-text);
    }
    .sb--card.offline .sb--card__info,
    .sb--card.offline .sb--card__moreinfo {
      opacity: 0.5;
    }`,
      copyVar: `:root {
      --cc-sbcard-offline-bg: var(--tertiary-color);
      --cc-sbcard-offline-img-text: var(--white);
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

  ngOnInit() {
    //this._scrollSpyService.setOffset('window', 800);

    // window.addEventListener('DOMContentLoaded', () => {
    //   const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //       const id = entry.target.getAttribute('id');
    //       if (entry.intersectionRatio > 0) {
    //         document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
    //       } else {
    //         document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
    //       }
    //     });
    //   });
    //   // Track all sections that have an `id` applied
    //   document.querySelectorAll('section[id]').forEach((section) => {
    //     observer.observe(section);
    //   });
      
    // });
    
  }


}
