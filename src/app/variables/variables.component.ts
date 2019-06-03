import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html'
})
export class VariablesComponent implements OnInit {

  constructor() { }

  pageTitle  = 'Variables';
  sections = [
    {
      expandCode: false,
      title: '',
      demoCode: `
     
      `,
      copyCode: `
     
      `
    }
  ];

  ngOnInit() {
  }

}