import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scooling-at-home',
  templateUrl: './scooling-at-home.component.html',
  styleUrls: ['./scooling-at-home.component.scss']
})

export class ScoolingAtHomeComponent implements OnInit, OnDestroy  {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  panelOpened = false;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
