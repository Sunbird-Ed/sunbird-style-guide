import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }
  pageTitle  = 'Lists';
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
    }
  ];
  ngOnInit() {
  }

}
