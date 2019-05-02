import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html'
})
export class TestPageComponent implements OnInit {

  constructor() { }

  pageTitle  = 'Test Page';
  sections = [
    {
      expandCode: false,
      title: 'Meta Data List',
      demoCode: `
      <dl class="sb-meta-data sb-meta-d1">
        <dt>Title</dt>
        <dd>SNF Chapter 1 Kalrav Hindi</dd>
        <dt>aklsdjflsd lfsldjflsakfljslkdfjlksdjflks fljalskdfjl;asdfjlsdjf;l</dt>
        <dd>SNF Chapter 1 Kalrav Hindi</dd>
      </dl>
      `,
      copyCode: `
      <dl class="sb-meta-data sb-meta-d1">
      <dt>Title</dt>
      <dd>SNF Chapter 1 Kalrav Hindi</dd>
      <dt>aklsdjflsd lfsldjflsakfljslkdfjlksdjflks fljalskdfjl;asdfjlsdjf;l</dt>
      <dd>SNF Chapter 1 Kalrav Hindi</dd>
    </dl>
      `
    }
    
  ];

  ngOnInit() {
  }

}