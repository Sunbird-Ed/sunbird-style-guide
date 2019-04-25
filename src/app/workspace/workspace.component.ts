import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer, CustomerSearchCriteria } from '../services/table-data.service';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})

export class WorkspaceComponent implements OnInit {

  handlePin() {
    console.log('pinned');
  }
  handleUnpin() {
    console.log('unpinned');
  }
  
  pageTitle = 'Workspace';
  multiSelect1: any;
  
  constructor(private service: CustomerService) {
    this.multiSelect1 = [{name: 'Example'}, {name: 'Test'}, {name: 'that'}];
  }

  customers: Customer[];
  
  
  getCustomers(criteria: CustomerSearchCriteria){
    this.customers = this.service.getCustomers(criteria);
  }
  
  onSorted($event){
    this.getCustomers($event);
  }
  
  ngOnInit(){
    this.getCustomers({sortColumn: 'id', sortDirection:'asc'});
  }




}
