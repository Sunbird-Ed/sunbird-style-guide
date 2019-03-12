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
      title: 'Basic Labels',
      demoCode: `
      <label class="sb-label sb-label-outline-primary sb-label-normal mr-10">Basic label</label>
      <label class="sb-label sb-label-outline-secondary sb-label-normal mr-10">Secondary</label>
      <label class="sb-label sb-label-outline-tertiary sb-label-normal mr-10">Tertiary</label>
      <label class="sb-label sb-label-outline-info sb-label-normal mr-10">Info</label>
      <label class="sb-label sb-label-outline-success sb-label-normal mr-10">Success</label>
      <label class="sb-label sb-label-outline-warning sb-label-normal mr-10">Warning</label>
      <label class="sb-label sb-label-outline-error sb-label-normal mr-10">Error</label>
      `,
      copyCode: `
      <label class="sb-label sb-label-outline-primary sb-label-normal">Basic label</label>
      <label class="sb-label sb-label-outline-secondary sb-label-normal">Secondary</label>
      <label class="sb-label sb-label-outline-tertiary sb-label-normal">Tertiary</label>
      <label class="sb-label sb-label-outline-info sb-label-normal">Info</label>
      <label class="sb-label sb-label-outline-success sb-label-normal">Success</label>
      <label class="sb-label sb-label-outline-warning sb-label-normal">Warning</label>
      <label class="sb-label sb-label-outline-error sb-label-normal">Error</label>
      `
    },
    {
      expandCode: false,
      title: 'label States',
      demoCode: `
      <label class="sb-label sb-label-disabled sb-label-normal mr-10">Primary Disable</label>
      <label class="sb-label sb-label-outline-disabled sb-label-normal">Basic label Disable</label>
      `,
      copyCode: `
      <label class="sb-label sb-label-disabled sb-label-normal">Primary Disable</label>
      <label class="sb-label sb-label-outline-disabled sb-label-normal">Basic label Disable</label>
      `
    },
    {
      expandCode: false,
      title: 'Colored labels',
      demoCode: `
      <label class="sb-label sb-label-primary sb-label-normal mr-10">Primary label</label>
      <label class="sb-label sb-label-secondary sb-label-normal mr-10">Secondary</label>
      <label class="sb-label sb-label-tertiary sb-label-normal mr-10">Tertiary</label>
      <label class="sb-label sb-label-warning sb-label-normal mr-10">warning</label>
      <label class="sb-label sb-label-error sb-label-normal mr-10">Error</label>
      <label class="sb-label sb-label-info sb-label-normal mr-10">Info</label>
      `,
      copyCode: `
      <label class="sb-label sb-label-primary sb-label-normal">Primary label</label>
      <label class="sb-label sb-label-secondary sb-label-normal">Secondary</label>
      <label class="sb-label sb-label-tertiary sb-label-normal">Tertiary</label>
      <label class="sb-label sb-label-warning sb-label-normal">warning</label>
      <label class="sb-label sb-label-error sb-label-normal">Error</label>
      <label class="sb-label sb-label-info sb-label-normal">Info</label>
      `
    },
    {
      expandCode: false,
      title: 'label Sizes',
      demoCode: `
      <label class="sb-label sb-label-primary sb-label-xs mr-10">mini</label>
      <label class="sb-label sb-label-primary sb-label-normal mr-10">normal</label>
      <label class="sb-label sb-label-primary sb-label-sm mr-10">small</label>
      <label class="sb-label sb-label-primary sb-label-md mr-10">medium</label>
      <label class="sb-label sb-label-primary sb-label-lg mr-10">large</label>
      `,
      copyCode: `
      <label class="sb-label sb-label-primary sb-label-xs">mini</label>
      <label class="sb-label sb-label-primary sb-label-normal">normal</label>
      <label class="sb-label sb-label-primary sb-label-sm">small</label>
      <label class="sb-label sb-label-primary sb-label-md">medium</label>
      <label class="sb-label sb-label-primary sb-label-lg">large</label>
      `
    }
  ];

  ngOnInit() {
  }

}
