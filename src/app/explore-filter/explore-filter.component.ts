import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-filter',
  templateUrl: './explore-filter.component.html',
  styleUrls: ['./explore-filter.component.scss']
})
export class ExploreFilterComponent implements OnInit {
  multiSelect1: any;
  pageTitle = 'Filters';
  constructor() {
    this.multiSelect1 = [{name: 'Example'}, {name: 'Test'}, {name: 'that'}];
   }

  ngOnInit() {
  }

}
