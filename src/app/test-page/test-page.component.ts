import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-test-page",
  templateUrl: "./test-page.component.html"
})
export class TestPageComponent implements OnInit {
    slideIndex = 1;
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
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
   
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }
  
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i]['style'].display = 'none';
    }

    slides[this.slideIndex - 1]['style'].display ='block';
  }
}


