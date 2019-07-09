import { Component, OnInit, HostListener, OnDestroy, Inject, Renderer2 } from "@angular/core";
import { Router } from '@angular/router';
import { HighlightResult } from "ngx-highlightjs";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-test-page",
  templateUrl: "./test-page.component.html"
})
export class TestPageComponent implements OnInit, OnDestroy {
   
  //public fixed: boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}
   
  pageTitle = "Test Page";
  sections = [
    {
      expandCode: false,
      title: "Meta Data List",
      demoCode: ``,
      copyCode: ``
    }
  ];

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

 

}


