import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qml-solutions',
  templateUrl: './qml-solutions.component.html',
  styleUrls: ['./qml-solutions.component.scss']
})
export class QmlSolutionsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  panelOpened = false;

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

}
