import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { libraryCardData } from './library-card.data';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  pageTitle = "Library Card";
  sections = libraryCardData;

  currentSection = 'libraryv1-1';

  constructor(private router: Router) { }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
