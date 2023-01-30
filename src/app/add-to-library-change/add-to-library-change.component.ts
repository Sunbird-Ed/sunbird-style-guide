import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-library-change',
  templateUrl: './add-to-library-change.component.html',
  styleUrls: ['./add-to-library-change.component.scss']
})
export class AddToLibraryChangeComponent implements OnInit {

  //Classes = [{ name: 'class 1' }, { name: 'class 2' }, { name: 'class 3' }];
  
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
  
  enableTocPlayerGrid: boolean = false;
  enableSuggestions: boolean = false;
  disableTocOnly: boolean = true;
  showFilter: boolean = false;
  exploreTab: boolean = true;
  selectedItem;
  noResult: boolean = false;
  subjects: { name: string; }[];
  classes: { name: string; }[];
  mediums: { name: string; }[];
  contentTypes: { name: string; }[];
  selectedContentType: { name: string; }[];
  selectedClass: { name: string; }[];
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.subjects = [{name: 'English'}, {name: 'Mathematics'}, {name: 'Social'},{name: 'Geography'}];
    this.classes = [{name: 'Class 6'}, {name: 'Class 7'}, {name: 'Class 8'}];
    this.contentTypes = [{name: 'Explanation'}, {name: 'Practice'}, {name: 'Lesson Plan'}];
    this.mediums = [{name: 'English'}, {name: 'Hindi'}];
    this.selectedContentType = this.contentTypes;
    this.selectedClass = this.classes;
  }

  enableTocPlayer(event, newValue1) {
    console.log(newValue1);
    this.selectedItem = newValue1;
    this.enableTocPlayerGrid = true;
    this.disableTocOnly = true;
  }
  enablePlayer(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;
    this.disableTocOnly = false;
    this.enableTocPlayerGrid = true;
  }

  activeTab(value) {
    this.exploreTab = (value === 'explore' ? true : false);
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}

