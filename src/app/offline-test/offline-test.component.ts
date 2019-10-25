import { Component, OnInit,  OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline-test',
  templateUrl: './offline-test.component.html',
  styleUrls: ['./offline-test.component.scss']
})
export class OfflineTestComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }
  multiSelect1: { name: string; }[];
  panelOpened = false;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.multiSelect1 = [{name: 'English'}, {name: 'Hindi'}, {name: 'Urdu'}];
  }

}
