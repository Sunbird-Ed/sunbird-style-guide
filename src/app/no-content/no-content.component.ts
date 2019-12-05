import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent implements OnInit {
  showLoadContent: boolean;
  loadContent: any;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  panelOpened = false;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  // ngOnDestroy(): void {
  //   this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  // }
showLoadModal() {
 this.showLoadContent = !this.showLoadContent;
 }
 continueLoadContent() {
  this.loadContent = !this.loadContent;
 }
}
