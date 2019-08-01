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

  menuSearch(event) {
    // tslint:disable-next-line:one-variable-per-declaration
    let filter, ul, li, a, i, j, listHeading;
    filter = event.target.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByClassName('sb-site-list-item');
    listHeading = ul.getElementsByClassName('sb-site-list-heading');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
        for (j = 0; j < listHeading.length; j++) {
          listHeading[j].style.display = 'none';
        }
      } else {
        li[i].style.display = 'none';
        for (j = 0; j < listHeading.length; j++) {
          listHeading[j].style.display = 'none';
        }
      }
    }
  }
}

