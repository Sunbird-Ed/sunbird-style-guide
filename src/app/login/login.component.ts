import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  languageSelection = [
    { name: 'English (Detected)', checked: true }, { name: 'हिंदी', checked: false }, { name: 'मराठी', checked: false },
    { name: 'ಕನ್ನಡ', checked: false }, { name: 'తెలుగు', checked: false }, { name: 'বাংলা', checked: false },
    { name: 'தமிழ்', checked: false }, { name: 'اردو', checked: false }
  ];
  selectMediumOption: { name: string; value: string; }[];
  selectBoardOption: { name: string; value: string; }[];
  selectClassOption: { name: string; value: string; }[];
  showContent: any;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {
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
  }
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  showNextContent() {
    this.showContent = !this.showContent;
  }
}
