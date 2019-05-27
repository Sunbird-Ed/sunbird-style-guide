import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html'
})
export class LabelsComponent implements OnInit {

  constructor() { }
  pageTitle = 'Labels';
  sections = [
    {
      expandCode: false,
      title: 'label States',
      demoCode: `
      <div class="sb-label sb-label-table sb-label-primary-100 mr-8">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0 mr-8">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0 mr-8"><span class="sb-live"></span>Review</span></div>
      <div class="sb-label sb-label-table sb-label-warning-0 mr-8">Review/Warning</div>
      <div class="sb-label sb-label-table sb-label-error-0 mr-8">Error</div>
      <div class="sb-label sb-label-table sb-label-gray-0 mr-8">Review</div>
      <div class="sb-pageSection-count sb-label sb-label-xs sb-label-warning ml-8">25/234zne</div>
      `,
      copyCode: `
      <div class="sb-label sb-label-table sb-label-primary-100">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0"><span class="sb-live"></span>Review</span></div>
      <div class="sb-label sb-label-table sb-label-warning-0">Review/Warning</div>
      <div class="sb-label sb-label-table sb-label-error-0">Error</div>
      <div class="sb-label sb-label-table sb-label-gray-0">Review</div>
      <div class="sb-pageSection-count sb-label sb-label-xs sb-label-warning ml-8">25/234zne</div>
      `
    },
    
    {
      expandCode: false,
      title: 'label States',
      demoCode: `
      <div class="sb-label-status sb-label-status-success">
      <span class="sb-label-status-indicator sb-label-status-indicator-success"></span>You are online
    </div>
    <div class="sb-label-status sb-label-status-error mt-16">
    <span class="sb-label-status-indicator sb-label-status-indicator-error"></span>You are offline
    </div>
      `,
      copyCode: `
      <div class="sb-label-status sb-label-status-success">
      <span class="sb-label-status-indicator sb-label-status-indicator-success"></span>You are online
    </div>
    <div class="sb-label-status sb-label-status-error">
    <span class="sb-label-status-indicator sb-label-status-indicator-error"></span>You are offline
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Filter label Tags',
      demoCode: `
      <div class="sb-filter-label">
      <div class="d-inline-flex"><span class="sb-label-name">Board/Syllabus:</span><span class="sb-label-value">CBSE<i class="close icon mr-0 pl-4"></i></span>
    </div>
    <div class="d-inline-flex"><span class="sb-label-value mr-8">CBSE</span><span class="sb-label-value">CBSE</span></div>
      </div>
      `,
      copyCode: `
      <div class="sb-filter-label">
      <div class="d-inline-flex"><span class="sb-label-name">Board/Syllabus:</span><span class="sb-label-value">CBSE<i class="close icon mr-0 pl-4"></i></span>
    </div>
    <div class="d-inline-flex"><span class="sb-label-value mr-8">CBSE</span><span class="sb-label-value">CBSE</span></div>
      </div>
      `
    }
  ];

  ngOnInit() {
  }

}
