import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {
  multiSelect1: any;

  constructor() {
    this.multiSelect1 = [{name: 'Example'}, {name: 'Test'}, {name: 'that'}];
   }

  ngOnInit() {
  }

}
