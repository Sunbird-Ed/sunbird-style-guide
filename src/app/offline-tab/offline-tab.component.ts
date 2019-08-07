import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offline-tab',
  templateUrl: './offline-tab.component.html',
  styleUrls: ['./offline-tab.component.scss']
})
export class OfflineTabComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

}