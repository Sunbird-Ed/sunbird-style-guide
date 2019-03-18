import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Cards';
  sections = [
    {
      expandCode: false,
      title: 'Course Card',
      demoCode: `
      
      `,
      copyCode: `
      
      `
    },
    {
      expandCode: false,
      title: 'Resourse Card',
      demoCode: `
      
      `,
      copyCode: `
      
      `
    }
  ];

  ngOnInit() {
  }
  

}
