import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offline-tab',
  templateUrl: './offline-tab.component.html',
  styleUrls: ['./offline-tab.component.scss']
})
export class OfflineTabComponent implements OnInit, OnDestroy {
  multiSelect1: { name: string; }[];

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.multiSelect1 = [{name: 'English'}, {name: 'Hindi'}, {name: 'Urdu'}];
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

}