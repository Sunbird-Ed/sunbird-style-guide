import { Component, OnInit,  OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline-test',
  templateUrl: './offline-test.component.html',
  styleUrls: ['./offline-test.component.scss']
})
export class OfflineTestComponent implements OnInit {
  selectOption: any;
  panelOpened = false;
  selectMedium: { name: string; id: string; value: string; };

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.selectOption = [
      {
        name: 'English',
        value: '0'
      }, {
        name: 'বাংলা',
        value: '1'
      }, {
        name: 'اردو',
        value: '2'
      }, {
        name: 'मराठी',
        value: '3'
      }
      , {
        name: 'ಕನ್ನಡ',
        value: '4'
      }
      , {
        name: 'తెలుగు',
        value: '5'
      }
      , {
        name: 'हिंदी',
        value: '6'
      }
      , {
        name: 'தமிழ்',
        value: '7'
      }
    ];
    this.selectMedium = this.selectOption[0];
  }

}
