import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer, CustomerSearchCriteria } from '../services/table-data.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {


  
  pageTitle = 'Filters';
  multiSelect1: any;
  
  constructor( ) {
    this.multiSelect1 = [{name: 'Example'}, {name: 'Test'}, {name: 'that'}];
  }


  ngOnInit(){
  }




}
