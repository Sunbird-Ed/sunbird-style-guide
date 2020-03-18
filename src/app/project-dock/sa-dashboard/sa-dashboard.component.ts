import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sa-dashboard',
  templateUrl: './sa-dashboard.component.html',
  styleUrls: ['./sa-dashboard.component.scss']
})
export class SaDashboardComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

}