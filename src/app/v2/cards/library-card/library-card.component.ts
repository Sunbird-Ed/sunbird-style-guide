import { Component, OnInit } from '@angular/core';
import { libraryCardData } from './library-card.data';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  constructor() { }

  pageTitle = "Library Card";
  sections = libraryCardData;

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
