import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-desktop-help',
  templateUrl: './desktop-help.component.html',
  styleUrls: ['./desktop-help.component.scss']
})
export class DesktopHelpComponent implements OnInit {
  selectOption: any;
  panelOpened = false;
  selectMedium: { name: string; id: string; value: string; };
  showNormalModal;
  issueReportText: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.selectOption = [
      {
        name: 'English',
        value: '0'
      }, {
        name: 'Hindi',
        value: '1'
      }, {
        name: 'Urdu',
        value: '2'
      }, {
        name: 'Marathi',
        value: '3'
      }
      , {
        name: 'Kannada',
        value: '4'
      }
      , {
        name: 'Telugu',
        value: '5'
      }
      , {
        name: 'Tamil',
        value: '6'
      }
      , {
        name: 'Malayalam',
        value: '7'
      }
    ];
    this.selectMedium = this.selectOption[0];
  }
  submitIssue() {
    this.issueReportText = !this.issueReportText;
  }
}
