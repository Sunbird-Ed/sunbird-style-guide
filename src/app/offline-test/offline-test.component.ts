import { Component, OnInit,  OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline-test',
  templateUrl: './offline-test.component.html',
  styleUrls: ['./offline-test.component.scss']
})
export class OfflineTestComponent implements OnInit {
  private selectOption: any;
  panelOpened = false;
  selectMedium: { name: string; id: string; value: string; };

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    // this.selectOption = [{name: 'English'}, {name: 'Hindi'}, {name: 'Urdu'}];
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

}
