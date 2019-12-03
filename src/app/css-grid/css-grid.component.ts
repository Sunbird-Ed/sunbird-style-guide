import { Component, OnInit,  OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss']
})
export class CssGridComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }


  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

}
