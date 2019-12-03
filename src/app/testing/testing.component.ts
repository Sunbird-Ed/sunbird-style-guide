import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  Classes = [
    {name : "class 1"},
    {name : "class 2"},  
    {name : "class 3"},
    {name : "class 4"}, 
    {name : "class 5"},   
    {name : "class 6"},  
    {name : "class 7"},
    {name : "class 8"},
    {name : "class 9"},  
    {name : "class 10"},
    {name : "class 11"},
    {name : "class 12"},
    {name : "class 13"},
    {name : "class 14"},  
    {name : "class 15"},
    {name : "class 16"}, 
    {name : "class 17"},   
    {name : "class 18"},  
    {name : "class 19"},
    {name : "class 20"},
    {name : "class 21"},  
    {name : "class 22"},
    {name : "class 23"},
    {name : "class 24"}
  ];
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  panelOpened = false;
  
  slideConfig = {
    dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
   responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
    // dots: false,
    // infinite: false,
    // speed: 300,
    // slidesToShow: 1,
    // centerMode: false,
    // variableWidth: true,
    // rtl: true,
    // responsive: [
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       arrows: false,
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  };

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  // ngOnDestroy(): void {
  //   this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  // }

}
