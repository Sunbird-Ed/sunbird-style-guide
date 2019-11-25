import { Component, OnInit,  OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-set',
  templateUrl: './practice-set.component.html',
  styleUrls: ['./practice-set.component.scss']
})
export class PracticeSetComponent implements OnInit {
  showNormalModal;
  uploadFiles = false;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  uploadDocument() {
  this.uploadFiles = !this.uploadFiles;
 }
 uploadModal() {
  this.showNormalModal = !this.showNormalModal;
 }
}
