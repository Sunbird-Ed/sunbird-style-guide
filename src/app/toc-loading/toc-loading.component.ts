import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-toc-loading',
  templateUrl: './toc-loading.component.html',
  styleUrls: ['./toc-loading.component.scss']
})
export class TocLoadingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

}
