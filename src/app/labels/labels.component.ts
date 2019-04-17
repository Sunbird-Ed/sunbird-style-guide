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
      <div class="sb-label sb-label-table sb-label-gray-0 mr-8">Review</div>
      `,
      copyCode: `
      <div class="sb-label sb-label-table sb-label-primary-100 mr-8">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0 mr-8">Review</div>
      <div class="sb-label sb-label-table sb-label-success-0 mr-8"><span class="sb-live"></span>Review</span></div>
      <div class="sb-label sb-label-table sb-label-warning-0">Review</div>
      <div class="sb-label sb-label-table sb-label-gray-0">Review</div>
      `
    },
   
  ];

  ngOnInit() {
  }

}
