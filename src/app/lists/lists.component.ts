import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }
  pageTitle = 'Lists';
  sections = [
    {
      expandCode: false,
      title: 'Lists with circle',
      demoCode: `
      <ul class="sb-circular-list mt-32">
      <li class="sb-circular-list-item">Free unlimited content</li>
      <li class="sb-circular-list-item">Multilingual support</li>
      <li class="sb-circular-list-item">Play content offline</li>
    </ul>
      `,
      copyCode: `
      <ul class="sb-circular-list mt-32">
      <li class="sb-circular-list-item">Free unlimited content</li>
      <li class="sb-circular-list-item">Multilingual support</li>
      <li class="sb-circular-list-item">Play content offline</li>
    </ul>
      `
    },
    {
      expandCode: false,
      title: 'Description lists',
      demoCode: `
      <dl class="mt-8 mb-0">
      <div class="d-flex">
        <dt class="description-list-key">Version:</dt>
        <dd class="description-list-value">0.12.12</dd>
      </div>
    </dl>
      `,
      copyCode: `
      <dl class="mt-8 mb-0">
      <div class="d-flex">
        <dt class="description-list-key">Version:</dt>
        <dd class="description-list-value">0.12.12</dd>
      </div>
    </dl>
      `
    },
    {
      expandCode: false,
      title: 'Two lines list',
      demoCode: `
      <dl class="mt-8 mb-0">
        <dt class="multiline-list-key">Version:</dt>
        <dd class="multiline-list-value">0.12.12</dd>
    </dl>
      `,
      copyCode: `
      <dl class="mt-8 mb-0">
        <dt class="multiline-list-key">Version:</dt>
        <dd class="multiline-list-value">0.12.12</dd>
      </dl>
      `
    },
    {
      expandCode: false,
      title: 'List items',
      demoCode: `<ul class="sb-bordered-list">

<li class="sb-bordered-list-item">
<div class="d-flex flex-ai-center">
<div class="sb-bordered-list-item-title">Files imported (03)</div>
<div class="sb-bordered-list-item-title-extra ml-16">Total size: 75KB</div>
</div>
</li>
<li class="sb-bordered-list-item">
<div class="d-flex flex-ai-center">
<div class="sb-bordered-list-item-heading">File_1.gsa</div>
<div class="sb-bordered-list-item-subheading ml-16">19 February 2019 at 6:40 PM, 25KB</div>
</div>
</li>
<li class="sb-bordered-list-item">
<div class="d-flex flex-ai-center">
<div class="sb-bordered-list-item-heading">File_2.gsa</div>
<div class="sb-bordered-list-item-subheading ml-16">19 February 2019 at 6:40 PM, 25KB</div>
</div>
</li>
</ul>
      `,
      copyCode: `
      <ul class="sb-bordered-list">
      <li class="sb-bordered-list-item">
      <div class="d-flex flex-ai-center">
      <div class="sb-bordered-list-item-title">Files imported (03)</div>
      <div class="sb-bordered-list-item-title-extra ml-16">Total size: 75KB</div>
      </div>
      </li>
      <li class="sb-bordered-list-item">
      <div class="d-flex flex-ai-center">
      <div class="sb-bordered-list-item-heading">File_1.gsa</div>
      <div class="sb-bordered-list-item-subheading ml-16">19 February 2019 at 6:40 PM, 25KB</div>
      </div>
      </li>
      <li class="sb-bordered-list-item">
      <div class="d-flex flex-ai-center">
      <div class="sb-bordered-list-item-heading">File_2.gsa</div>
      <div class="sb-bordered-list-item-subheading ml-16">19 February 2019 at 6:40 PM, 25KB</div>
      </div>
      </li>
      </ul>
      `
    }
  ];
  ngOnInit() {
  }

}
