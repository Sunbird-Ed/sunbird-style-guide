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
  selectOutcome: any;
  selectLevel: any;
  selectLicence: any;
  selectOutcomeOption: any = [];
  selectLevelOption: any = [];
  selectLicenseOption: any = [];
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.selectOutcomeOption = [
      {
        name: 'outcome1',
        value: '0'
      },
      {
        name: 'outcome2',
        value: '1'
       }
    ];
    this.selectLevelOption = [
      {
        name: 'level1',
        value: '0'
      },
      {
        name: 'level2',
        value: '1'
       }
    ];
    this.selectLicenseOption = [
      {
        name: 'CC by 4.0',
        value: '0'
      },
      {
        name: 'CC by 4.1',
        value: '1'
       }
     ];
  }
  uploadDocument() {
  this.uploadFiles = !this.uploadFiles;
 }
 uploadModal() {
  this.showNormalModal = !this.showNormalModal;
 }
}
