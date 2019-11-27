import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-offline-header',
  //encapsulation: ViewEncapsulation.None,
  templateUrl: './offline-header.component.html',
  styleUrls: ['./offline-header.component.scss']
})
export class OfflineHeaderComponent implements OnInit {
  selectLanguage: any;
  selectOption: any [];
  constructor() { }
  isShown = true ;
  ngOnInit() {
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
    this.selectLanguage = this.selectOption[0];
  }
}
