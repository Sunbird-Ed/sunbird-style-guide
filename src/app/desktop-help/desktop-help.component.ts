import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-desktop-help',
  templateUrl: './desktop-help.component.html',
  styleUrls: ['./desktop-help.component.scss']
})
export class DesktopHelpComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
}
