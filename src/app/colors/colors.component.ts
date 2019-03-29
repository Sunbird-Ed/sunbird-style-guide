import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Colors';
  sections = [
    {
      expandCode: false,
      title: 'Colors',
      demoCode: `

      `,
      copyCode: `

      `
    }
  ];

  ngOnInit() {
  }

}
