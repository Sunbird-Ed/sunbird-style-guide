import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-test-page",
  templateUrl: "./test-page.component.html"
})
export class TestPageComponent implements OnInit {
   
  //public fixed: boolean = true;
  constructor(@Inject(DOCUMENT) private doc: Document) {}
   
  pageTitle = "Test Page";
  sections = [
    {
      expandCode: false,
      title: "Meta Data List",
      demoCode: `
           
      `,
      copyCode: `
     
      `
    }
  ];

  ngOnInit() {
  }

 

}


