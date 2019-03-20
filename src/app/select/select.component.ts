import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  multiSelect1: any;

  constructor() {
    this.multiSelect1 = [{name: 'Example'}, {name: 'Test'}, {name: 'that'}];
    console.log(this.multiSelect1);
   }


   pageTitle = 'Select';
  sections = [
    {
      expandCode: false,
      title: 'Select',
      demoCode: `
      <div class="ui segment">
      <p>Multi Select (with <code>selection</code> class applied)</p>
      <sui-multi-select class="selection"
                        [(ngModel)]="selectedOptions"
                        [options]="options"
                        labelField="name"
                        [isSearchable]="searchable"
                        [isDisabled]="disabled"
                        [hasLabels]="!hideLabels"
                        #multiSelect>
          <sui-select-option *ngFor="let option of multiSelect.filteredOptions"
                             [value]="option">
          </sui-select-option>
      </sui-multi-select>
  </div> `,
      copyCode: `
      <div class="ui segment">
      <p>Multi Select (with <code>selection</code> class applied)</p>
      <sui-multi-select class="selection"
                        [(ngModel)]="selectedOptions"
                        [options]="options"
                        labelField="name"
                        [isSearchable]="searchable"
                        [isDisabled]="disabled"
                        [hasLabels]="!hideLabels"
                        #multiSelect>
          <sui-select-option *ngFor="let option of multiSelect.filteredOptions"
                             [value]="option">
          </sui-select-option>
      </sui-multi-select>
  </div>

      `
    }

  ]



  ngOnInit() {
  }

}
