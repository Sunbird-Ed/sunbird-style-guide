import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  constructor() { }
  pageTitle  = 'Banner';
  sections = [
    {
      expandCode: false,
      title: 'Banner',
      demoCode: `
      <div class="sb-banner">
      <div class="sb-banner-content">
        <div class="sb-banner-content-right">
          <div class="sb-banner-heading cursor-pointer">Download ***** Lite Desktop App</div>
          <dl class="mt-8 mb-0">
            <div class="d-flex">
              <dt class="description-list-key">Version:</dt>
              <dd class="description-list-value">0.12.12</dd>
            </div>
          </dl>
        </div>
        <div class="sb-banner-content-left">
          <button class="sb-btn sb-btn-primary sb-btn-normal">Download for Windows (64-bit)</button>
          <i class="sb-banner-close-icon close icon link"></i>
        </div>
      </div>
    </div>
      `,
      copyCode: `
      <div class="sb-banner">
      <div class="sb-banner-content">
        <div class="sb-banner-content-right">
          <div class="sb-banner-heading cursor-pointer">Download ***** Lite Desktop App</div>
          <dl class="mt-8 mb-0">
            <div class="d-flex">
              <dt class="description-list-key">Version:</dt>
              <dd class="description-list-value">0.12.12</dd>
            </div>
          </dl>
        </div>
        <div class="sb-banner-content-left">
          <button class="sb-btn sb-btn-primary sb-btn-normal">Download for Windows (64-bit)</button>
          <i class="sb-banner-close-icon close icon link"></i>
        </div>
      </div>
    </div>
      `
    }
  ];
  ngOnInit() {
  }
}