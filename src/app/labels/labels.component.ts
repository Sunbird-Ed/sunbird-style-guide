import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html'
})
export class LabelsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Labels';
  sections = [
    {
      expandCode: false,
      title: 'Basic Labels',
      demoCode: `
     
      `,
      copyCode: `
    
      `
    },
    {
      expandCode: false,
      title: 'label States',
      demoCode: `
    
      `,
      copyCode: `
     
      `
    },
    {
      expandCode: false,
      title: 'Colored labels',
      demoCode: `
   
      `,
      copyCode: `
    
      `
    },
    {
      expandCode: false,
      title: 'label Sizes',
      demoCode: `
     
      `,
      copyCode: `
   
      `
    }
  ];

  ngOnInit() {
  }

}
