import { Component, OnInit, Renderer2, Inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
// declare var Swiper: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  languageSelection: any [];
  selectMediumOption: any[];
  selectBoardOption: any[];
  selectClassOption: any[];
  selectStateOption: any[];
  selectPlaceOption: any[];
  showContent: any;
  radiobtnchecked: any;
  selectClass = false;
  selectMedium = false;
  selectBoard = false;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {
    this.languageSelection = [
      { name: 'English (Detected)', value: '0' }, { name: 'हिंदी', value: '1' }, { name: 'मराठी', value: '2' },
      { name: 'ಕನ್ನಡ', value: '3' }, { name: 'తెలుగు', value: '4' }, { name: 'বাংলা', value: '5' },
      { name: 'தமிழ்', value: '6' }, { name: 'اردو', value: '7' }
    ];
    this.radiobtnchecked = this.languageSelection[0];

    this.selectMediumOption = [
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

    this.selectPlaceOption = [
      {
        name: 'Amravati',
        value: '0'
      }, {
        name: 'Bangalore',
        value: '1'
      }, {
        name: 'Chennai',
        value: '2'
      }, {
        name: 'thiruvanthpuram',
        value: '3'
      }
      , {
        name: 'Ahemdabad',
        value: '4'
      }
      , {
        name: 'Mumbai',
        value: '5'
      }
      , {
        name: 'Lucknow',
        value: '6'
      }
    ];

    this.selectBoardOption = [
      {
        name: 'State(Andhra Pradesh)',
        value: '0'
      }, {
        name: 'State(Karnataka)',
        value: '1'
      }, {
        name: 'State(Tamil)',
        value: '2'
      }, {
        name: 'State(Telugu)',
        value: '3'
      }
      , {
        name: 'CBSE',
        value: '4'
      }
      , {
        name: 'ICSE',
        value: '5'
      }
      , {
        name: 'UP Board',
        value: '6'
      }
      , {
        name: 'State Board',
        value: '7'
      }
    ];

    this.selectClassOption = [
      {
        name: 'Class 1',
        value: '0'
      }, {
        name: 'Class 2',
        value: '1'
      }, {
        name: 'Class 3',
        value: '2'
      }, {
        name: 'Class 4',
        value: '3'
      }
      , {
        name: 'Class 5',
        value: '4'
      }
      , {
        name: 'Class 6',
        value: '5'
      }
      , {
        name: ' Class 7',
        value: '6'
      }
      , {
        name: 'Class 8',
        value: '7'
      }
    ];

    this.selectStateOption = [
      {
        name: 'Andhra Pradesh',
        value: '0'
      }, {
        name: 'Karnataka',
        value: '1'
      }, {
        name: 'Tamil Nadu',
        value: '2'
      }, {
        name: 'Kerala',
        value: '3'
      }
      , {
        name: 'Gujarat',
        value: '4'
      }
      , {
        name: 'Maharashtra',
        value: '5'
      }
      , {
        name: 'UP',
        value: '6'
      }
    ];
  }
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  showNextContent() {
    this.showContent = !this.showContent;
  }

}
