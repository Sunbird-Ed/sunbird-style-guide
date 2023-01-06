import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-landing',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Output() getMatchedLocationPath = new EventEmitter();
  @ViewChild('searchInput') searchInput: ElementRef;
  searchText;
  routeParametertemp;
  routeParameter;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onClickGetName(event) {
    this.routeParameter = event.target.innerText;
    this.getMatchedLocationPath.emit(this.routeParameter);
  }

  clearSearchInput() {
    this.searchInput.nativeElement.value = '';
  }


}

