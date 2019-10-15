import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  panelOpened = false;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

}
