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
  showfiltersCode;
  filters;


  filtersCode = ` <div class="sb-explore-filter">
  <div class="sb-prominent-filter">
    <div class="ui container">
      <div class="sb-prominent-filter-container">
        <div class="sb-prominent-filter-field">
          <label>Select Board</label>
          <sui-multi-select class="selection sb-select-searchfilter" labelField="name" [hasLabels]="false"  [isSearchable]="true" #multiSelect>
            <sui-select-option *ngFor="let option of multiSelect1" [value]="option">
            </sui-select-option>
          </sui-multi-select>
        </div>
        <div class="sb-prominent-filter-field">
          <label>Medium</label>
            <sui-multi-select class="selection sb-select-searchfilter" labelField="name" [hasLabels]="false" [isSearchable]="true" #multiSelect>
                <sui-select-option *ngFor="let option of multiSelect1" [value]="option">
                </sui-select-option>
              </sui-multi-select>
        </div>
        <div class="sb-prominent-filter-field">
          <label>Select Grade</label>
            <sui-multi-select class="selection sb-select-searchfilter" labelField="name" [hasLabels]="false"  [isSearchable]="true" #multiSelect>
                <sui-select-option *ngFor="let option of multiSelect1" [value]="option">
                </sui-select-option>
              </sui-multi-select>
        </div>
        <div class="sb-prominent-filter-field">
          <label>Subject</label>
          <sui-multi-select class="selection sb-select-searchfilter" labelField="name" [hasLabels]="false"  [isSearchable]="true" #multiSelect>
            <sui-select-option *ngFor="let option of multiSelect1" [value]="option">
            </sui-select-option>
          </sui-multi-select>
        </div>
        <div class="sb-prominent-filter-field">
          <label>Select Status</label>
          <sui-multi-select class="selection sb-select-searchfilter" labelField="name" [hasLabels]="false"  [isSearchable]="true" #multiSelect>
            <sui-select-option *ngFor="let option of multiSelect1" [value]="option">
            </sui-select-option>
          </sui-multi-select>
        </div>
        <div class="sb-prominent-filter-field">
          <label>Select Resourcetype</label>
            <sui-multi-select class="selection sb-select-searchfilter" labelField="name" [hasLabels]="false"  [isSearchable]="true" #multiSelect>
                <sui-select-option *ngFor="let option of multiSelect1" [value]="option">
                </sui-select-option>
              </sui-multi-select>
        </div>
        <div class="sb-prominent-filter-field">
            <label>Content Type</label>
            <sui-multi-select class="selection sb-select-searchfilter" labelField="name" [hasLabels]="false"  [isSearchable]="true" #multiSelect>
                <sui-select-option *ngFor="let option of multiSelect1" [value]="option">
                </sui-select-option>
              </sui-multi-select>
        </div>
        <div class="sb-prominent-filter-field">
            <button class="sb-btn sb-btn-outline-primary sb-btn-normal mr-8">Reset</button>
            <button class="sb-btn sb-btn-primary sb-btn-normal">Apply</button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  ngOnInit(){
  }




}
