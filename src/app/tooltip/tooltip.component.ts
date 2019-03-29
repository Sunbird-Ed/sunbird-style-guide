import {
  Component,
  OnInit
} from '@angular/core';
import {
  HighlightResult
} from 'ngx-highlightjs';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent implements OnInit {

  positions;
  selectedPosition = 'top';
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.positions = ['top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right', 'right', 'right top', 'right bottom', 'left', 'left top', 'left bottom'];
  }

  pageTitle = 'Tooltip';
  section1 = {
    expandCode: false,
    title: 'Standard Tooltip',
    demoCode: `<button class="sb-btn sb-btn-outline-gray sb-btn-normal" suiPopup popupHeader="Short text Discription">Hover for
    tooltip</button>`,
    copyCode: `<button class="sb-btn sb-btn-outline-gray sb-btn-normal" suiPopup popupHeader="Short text Discription">Hover for
    tooltip</button>`
  };
  section2 = {
    expandCode: false,
    title: 'Positions for Tooltip',
    demoCode: `<div class="ui card mx-auto" >
    <div class="content" suiPopup popupHeader="You can customise my placement!" [popupPlacement]="selectedPosition">
      <div class="header">Positioning</div>
      <div class="description">
        Popup placement can be anywhere around the content.
      </div>
    </div>
    <p class="mt-20 mb-5 px-15"><strong>Select Positions</strong></p>
    <sui-select class="selection mx-15 mb-10" [(ngModel)]="selectedPosition">
      <sui-select-option *ngFor="let option of positions" [value]="option">
      </sui-select-option>
    </sui-select>
  </div>`,
    copyCode: `<div class="ui card mx-auto" >
    <div class="content" suiPopup popupHeader="You can customise my placement!" [popupPlacement]="selectedPosition">
      <div class="header">Positioning</div>
      <div class="description">
        Popup placement can be anywhere around the content.
      </div>
    </div>
    <p class="mt-20 mb-5 px-15"><strong>Select Positions</strong></p>
    <sui-select class="selection mx-15 mb-10" [(ngModel)]="selectedPosition">
      <sui-select-option *ngFor="let option of positions" [value]="option">
      </sui-select-option>
    </sui-select>
  </div>`
  };

  section3 = {
    expandCode: false,
    title: 'Title for Tooltip',
    demoCode: `<button class="sb-btn sb-btn-outline-gray sb-btn-normal mr-20" suiPopup popupHeader="Title"
    popupText="Short text Discription" popupPlacement="top">Title tooltip</button>`,
    copyCode: `<button class="sb-btn sb-btn-outline-gray sb-btn-normal mr-20" suiPopup popupHeader="Title"
    popupText="Short text Discription" popupPlacement="top">Title tooltip</button>`
  };


  ngOnInit() {
  }

}
