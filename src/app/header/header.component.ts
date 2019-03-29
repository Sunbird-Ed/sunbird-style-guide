import {
  Component,
  OnInit
} from '@angular/core';
import {
  HighlightResult
} from 'ngx-highlightjs';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  language;
  constructor() {
    this.language = [{name: 'English'}, {name: 'Kannada'}];
  }

  pageTitle = 'Header';
  sections = [{
    expandCode: false,
    title: 'Header Bar',
    demoCode: `
    <div class="sb-header">
    <div class="ui container fixed main menu ">
      <div class="ui container d-flex">
        <div class="sb-header-logo d-flex mr-auto">
          <img src="http://localhost:3000/assets/images/sunbird_logo.png" alt="sunbird">
        </div>
        <div class="sb-header-links d-flex ml-auto computer only">
          <a class="item active">Library</a>
          <a class="item">Course</a>
        </div>
        <i class="large bars icon link primary-color mobile only ml-auto my-auto" (click)="showSideBar()"></i>
      </div>
    </div>
  </div>
  <div class="mobile only">
    <div class="ui sidebar right vertical menu">
      <ng-container *ngIf="userService.loggedIn">
        <div class="item font-weight-bold">
          <i class="close link icon" (click)="showSideBar()" tabindex="0"
            title="close"></i>
          <div class="ellipsis">
            firstName lastname
          </div>
        </div>
        <div class="ui divider mt-0"></div>
        <a class="item">
          Library
        </a>
        <a class="item">
          Course
        </a>
      </ng-container>
    </div>
  </div>
  <div class="sb-sub-header">
    <div class="blue-bar">
      <div class="ui container d-flex flex-ai-center">
        <button class="sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center computer only"
          title="Enter QR code">
          <i class="qrcode icon"></i>
          Enter QR code
        </button>
        <div class="sb-divider computer only"></div>
        <div class="sb-search-box mr-auto medium">
          <div class="input-div relative">
            <i class="search icon"></i>
            <input type="text" name="filter_search" class="sb-search-input" placeholder="Search in All">
            <!-- <i class="close icon"></i>
          <div class="sb-loader"></div> -->
          </div>
          <button class="sb-btn sb-btn-normal" tabindex="0">Search</button>
        </div>
        <div class="sb-header-links ml-auto d-flex flex-ai-center computer only">
          <div>Select Language :
          </div>
          <sui-select class="sb-sub-header-select" placeholder="Choose" #searchSelect>
          <sui-select-option *ngFor="let option of language" [value]="option">
          </sui-select>
        </div>
      </div>
    </div>
    <div class="white-bar mobile only">
      <div class="ui container d-flex flex-ai-center">
        <button class="sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center mr-auto" title="Enter QR code">
          <i class="qrcode icon"></i>
          Enter QR code
        </button>
        <div class="sb-header-links ml-auto d-flex flex-ai-center">
          <sui-select class="sb-sub-header-select sb-btn sb-btn-normal sb-btn-outline-primary" placeholder="Choose" #searchSelect>
            <sui-select-option *ngFor="let option of language" [value]="option">
          </sui-select>
        </div>
      </div>
    </div>
  </div>
      `,
    copyCode: `
    <div class="sb-header">
    <div class="ui container fixed main menu ">
      <div class="ui container d-flex">
        <div class="sb-header-logo d-flex mr-auto">
          <img src="http://localhost:3000/assets/images/sunbird_logo.png" alt="sunbird">
        </div>
        <div class="sb-header-links d-flex ml-auto computer only">
          <a class="item active">Library</a>
          <a class="item">Course</a>
        </div>
        <i class="large bars icon link primary-color mobile only ml-auto my-auto" (click)="showSideBars()"></i>
      </div>
    </div>
  </div>
  <div class="mobile only">
    <div class="ui sidebar right vertical menu">
      <ng-container *ngIf="userService.loggedIn">
        <div class="item font-weight-bold">
          <i class="close link icon" (click)="showSideBars()" tabindex="0"
            title="close"></i>
          <div class="ellipsis">
            firstName lastname
          </div>
        </div>
        <div class="ui divider mt-0"></div>
        <a class="item">
          Library
        </a>
        <a class="item">
          Course
        </a>
      </ng-container>
    </div>
  </div>
  <div class="sb-sub-header">
    <div class="blue-bar">
      <div class="ui container d-flex flex-ai-center">
        <button class="sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center computer only"
          title="Enter QR code">
          <i class="qrcode icon"></i>
          Enter QR code
        </button>
        <div class="sb-divider computer only"></div>
        <div class="sb-search-box mr-auto medium">
          <div class="input-div relative">
            <i class="search icon"></i>
            <input type="text" name="filter_search" class="sb-search-input" placeholder="Search in All">
            <!-- <i class="close icon"></i>
          <div class="sb-loader"></div> -->
          </div>
          <button class="sb-btn sb-btn-normal" tabindex="0">Search</button>
        </div>
        <div class="sb-header-links ml-auto d-flex flex-ai-center computer only">
          <div>Select Language :
          </div>
          <sui-select class="sb-sub-header-select" placeholder="Choose">
            <sui-select-option value="Option 1"></sui-select-option>
            <sui-select-option value="Option 2"></sui-select-option>
            <sui-select-option value="Option 3"></sui-select-option>
            <sui-select-option value="Option 4"></sui-select-option>
          </sui-select>
        </div>
      </div>
    </div>
    <div class="white-bar mobile only">
      <div class="ui container d-flex flex-ai-center">
        <button class="sb-btn sb-btn-normal sb-btn-outline-primary d-flex flex-ai-center mr-auto" title="Enter QR code">
          <i class="qrcode icon"></i>
          Enter QR code
        </button>
        <div class="sb-header-links ml-auto d-flex flex-ai-center">
          <sui-select class="sb-sub-header-select sb-btn sb-btn-normal sb-btn-outline-primary" placeholder="Choose">
            <sui-select-option value="Option 1"></sui-select-option>
            <sui-select-option value="Option 2"></sui-select-option>
            <sui-select-option value="Option 3"></sui-select-option>
            <sui-select-option value="Option 4"></sui-select-option>
          </sui-select>
        </div>
      </div>
    </div>
  </div>
      `
  }];

  ngOnInit() {}

  showSideBar() {
    jQuery('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
  }
}
