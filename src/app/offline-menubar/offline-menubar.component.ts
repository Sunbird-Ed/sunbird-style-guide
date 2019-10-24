import { Component, OnInit, Renderer2, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline-menubar',
  templateUrl: './offline-menubar.component.html',
  styleUrls: ['./offline-menubar.component.scss']
})
export class OfflineMenubarComponent implements OnInit , OnDestroy {
  multiSelect1: { name: string; }[];

  constructor(@Inject (DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.multiSelect1 = [{name: 'English'}, {name: 'Hindi'}, {name: 'Urdu'}];
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
