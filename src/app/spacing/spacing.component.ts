import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-spacing',
  templateUrl: './spacing.component.html'
})
export class SpacingComponent implements OnInit {

  constructor() { }

  pageTitle = 'Space in Design Systems';
  sections = [
    {
      expandCode: false,
      title: 'gridlayout',
      demoCode: `
     
      `,
      copyCode: `
     
      `
    }
  ];

  ngOnInit() {
  }

}
