import { Component, OnInit, OnDestroy, Inject, Renderer2, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-banner',
  templateUrl: './maintenance-banner.component.html',
  styleUrls: ['./maintenance-banner.component.scss']
})
export class MaintenanceBannerComponent implements OnInit {

  showUploadUserModal;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
