import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schooling-information',
  templateUrl: './schooling-information.component.html',
  styleUrls: ['./schooling-information.component.scss']
})
export class SchoolingInformationComponent implements OnInit {
  selectMediumOption: any[];
  selectBoardOption: any[];
  selectClassOption: any[];
  selectStateOption: any[];
  selectPlaceOption: any[];
  selectClass = false;
  selectMedium = false;
  selectBoard = false;
  selectState = false;
  selectPlace = false;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) 
  {

    this.selectMediumOption = [
      {
        name: 'English',
        value: '0'
      },
      {
        name: 'Hindi',
        value: '1'
      },
      {
        name: 'Urdu',
        value: '2'
      },
      {
        name: 'Marathi',
        value: '3'
      },
      {
        name: 'Kannada',
        value: '4'
      },
      {
        name: 'Telugu',
        value: '5'
      },
      {
        name: 'Tamil',
        value: '6'
      },
      {
        name: 'Malayalam',
        value: '7'
      }
    ];

    this.selectPlaceOption = [
      {
        name: 'Amravati',
        value: '0'
      },
      {
        name: 'Bangalore',
        value: '1'
      },
      {
        name: 'Chennai',
        value: '2'
      },
      {
        name: 'thiruvanthpuram',
        value: '3'
      },
      {
        name: 'Ahemdabad',
        value: '4'
      },
      {
        name: 'Mumbai',
        value: '5'
      },
      {
        name: 'Lucknow',
        value: '6'
      }
    ];

    this.selectBoardOption = [
      {
        name: 'State(Andhra Pradesh)',
        value: '0'
      },
      {
        name: 'State(Karnataka)',
        value: '1'
      },
      {
        name: 'State(Tamil)',
        value: '2'
      },
      {
        name: 'State(Telugu)',
        value: '3'
      },
      {
        name: 'CBSE',
        value: '4'
      },
      {
        name: 'ICSE',
        value: '5'
      },
      {
        name: 'UP Board',
        value: '6'
      },
      {
        name: 'State Board',
        value: '7'
      }
    ];

    this.selectClassOption = [
      {
        name: 'Class 1',
        value: '0'
      },
      {
        name: 'Class 2',
        value: '1'
      },
      {
        name: 'Class 3',
        value: '2'
      },
      {
        name: 'Class 4',
        value: '3'
      },
      {
        name: 'Class 5',
        value: '4'
      },
      {
        name: 'Class 6',
        value: '5'
      },
      {
        name: ' Class 7',
        value: '6'
      },
      {
        name: 'Class 8',
        value: '7'
      }
    ];

    this.selectStateOption = [
      {
        name: 'Andhra Pradesh',
        value: '0'
      },
      {
        name: 'Karnataka',
        value: '1'
      },
      {
        name: 'Tamil Nadu',
        value: '2'
      },
      {
        name: 'Kerala',
        value: '3'
      },
      {
        name: 'Gujarat',
        value: '4'
      },
      {
        name: 'Maharashtra',
        value: '5'
      },
      {
        name: 'UP',
        value: '6'
      }
    ];
  }

  panelOpened = false;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

}
