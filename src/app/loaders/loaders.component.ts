import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html'
})
export class LoadersComponent implements OnInit {

  constructor() { }

  pageTitle = 'Loaders';
  sections = [
    {
      expandCode: false,
      title: 'Loader',
      demoCode: `
      <div class="" style="position:relative;width:100%;height: 300px;">
    <div class="sb-loader" style="position: absolute;
    left: 0px;
    right: 0px;
    width: 40px;
    margin: 0 auto;
    height: 40px;"></div>
</div>
      `,
      copyCode: `
      <div class="" style="position:relative;width:100%;height: 300px;">
      <div class="sb-loader" style="position: absolute;
      left: 0px;
      right: 0px;
      width: 40px;
      margin: 0 auto;
      height: 40px;"></div>
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Page Loader with Background',
      demoCode: `
      <div class="" style="position:relative;width:100%;height: 300px;">
    <div class="sb-loader dimmer" style="position: absolute;"></div>
</div>
      `,
      copyCode: `
      <div class="" style="position:relative;width:100%;height: 300px;">
      <div class="sb-loader dimmer" style="position: absolute;"></div>
  </div>
      `
    }
  ];

  ngOnInit() {
  }

}
