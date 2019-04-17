import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-filter',
  templateUrl: './workspace-filter.component.html',
  styleUrls: ['./workspace-filter.component.sass']
})
export class WorkspaceFilterComponent implements OnInit {
  multiSelect1: any;

  constructor() {
    this.multiSelect1 = [{name: 'Example'}, {name: 'Test'}, {name: 'that'}];
   }

  ngOnInit() {
  }

}
