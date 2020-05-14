import { Component, OnInit, OnDestroy, Inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-library',
  templateUrl: './add-to-library.component.html',
  styleUrls: ['./add-to-library.component.scss']
})
export class AddToLibraryComponent implements OnInit {
  Classes = [
    { name: "class 1" },
    { name: "class 2" },
    { name: "class 3" },
    { name: "class 4" },
    { name: "class 5" },
    { name: "class 6" },
    { name: "class 7" },
    { name: "class 8" },
    { name: "class 9" },
    { name: "class 10" },
    { name: "class 11" },
    { name: "class 12" },
  ];

  sbcards = [
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Great thinkers',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    }
  ];

  @ViewChild("SectionSuggestions") scrollTo: ElementRef;
  enableTocPlayerGrid: boolean = false;
  enableSuggestions: boolean = false;
  disableTocOnly: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

  enableTocPlayer() {
    this.enableTocPlayerGrid = !this.enableTocPlayerGrid;
    this.disableTocOnly = true;
  }
  enablePlayer() {
    this.disableTocOnly = false;
    this.enableTocPlayerGrid = !this.enableTocPlayerGrid;
  }


Navigate(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
}

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

}
