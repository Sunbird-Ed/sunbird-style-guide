import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CustomerService, Customer, CustomerSearchCriteria } from '../services/table-data.service';
import { trigger, state, animation, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class WorkspaceComponent implements OnInit {

  sbExploreFilter = false;

  handlePin() {
    console.log('pinned');
  }
  handleUnpin() {
    console.log('unpinned');
  }

  pageTitle = 'Workspace';
  multiSelect1: any;

  constructor(private service: CustomerService) {
    this.multiSelect1 = [{ name: 'Example' }, { name: 'Test' }, { name: 'that' }];
  }

  customers: Customer[];

  getCustomers(criteria: CustomerSearchCriteria) {
    this.customers = this.service.getCustomers(criteria);
  }

  onSorted($event) {
    this.getCustomers($event);
  }

  ngOnInit() {
    this.getCustomers({ sortColumn: 'id', sortDirection: 'asc' });
  }

  toggleSbFilter () {
    //debugger;
    this.sbExploreFilter = !this.sbExploreFilter;
  }

}
