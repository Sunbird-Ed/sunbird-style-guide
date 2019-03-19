import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-gridlayout',
  templateUrl: './gridlayout.component.html'
})
export class GridlayoutComponent implements OnInit {

  constructor() { }

  pageTitle = 'Grid Layout';
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
