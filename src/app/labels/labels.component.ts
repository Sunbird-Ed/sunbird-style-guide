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
      <div class="sb-label sb-label-table sb-label-warning-0 mr-8">Review</div>
      <div class="sb-label sb-label-table sb-label-gray-0">Review</div>
      `,
      copyCode: `
      <div class="sb-label sb-label-table sb-label-primary-100">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0"><span class="sb-live"></span>Review</span></div>
      <div class="sb-label sb-label-table sb-label-warning-0">Review</div>
      <div class="sb-label sb-label-table sb-label-gray-0">Review</div>
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

  ];

  ngOnInit() {
  }

}
