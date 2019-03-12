import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Buttons';
  sections = [
    {
      expandCode: false,
      title: 'Basic Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-outline-primary sb-btn-normal mr-10">Basic Button</button>
      <button class="sb-btn sb-btn-outline-secondary sb-btn-normal mr-10">Secondary</button>
      <button class="sb-btn sb-btn-outline-tertiary sb-btn-normal mr-10">Tertiary</button>
      <button class="sb-btn sb-btn-outline-info sb-btn-normal mr-10">Info</button>
      <button class="sb-btn sb-btn-outline-success sb-btn-normal mr-10">Success</button>
      <button class="sb-btn sb-btn-outline-warning sb-btn-normal mr-10">Warning</button>
      <button class="sb-btn sb-btn-outline-error sb-btn-normal mr-10">Error</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-outline-primary sb-btn-normal">Basic Button</button>
      <button class="sb-btn sb-btn-outline-secondary sb-btn-normal">Secondary</button>
      <button class="sb-btn sb-btn-outline-tertiary sb-btn-normal">Tertiary</button>
      <button class="sb-btn sb-btn-outline-info sb-btn-normal">Info</button>
      <button class="sb-btn sb-btn-outline-success sb-btn-normal">Success</button>
      <button class="sb-btn sb-btn-outline-warning sb-btn-normal">Warning</button>
      <button class="sb-btn sb-btn-outline-error sb-btn-normal">Error</button>
      `
    },
    {
      expandCode: false,
      title: 'Button Groups',
      demoCode: `
      <div class="btn-group">
      <button class="sb-btn sb-btn-normal"><i class="plus icon"></i></button>
      <button class="sb-btn sb-btn-normal active"><i class="plus icon"></i></button>
      </div>
      `,
      copyCode: `
      <div class="btn-group">
      <button class="sb-btn sb-btn-normal"><i class="plus icon"></i></button>
      <button class="sb-btn sb-btn-normal active"><i class="plus icon"></i></button>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Dashed Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-normal sb-btn-dashed">Basic Button</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-normal sb-btn-dashed">Basic Button</button>
      `
    },
    {
      expandCode: false,
      title: 'Icon Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn">right icon button <i class="home icon"></i></button>
<button class="sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn"><i class="home icon"></i>left icon button </button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn">right icon button <i class="home icon"></i></button>
<button class="sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn"><i class="home icon"></i>left icon button </button>
      `
    },
    {
      expandCode: false,
      title: 'Loading Button',
      demoCode: `
      <button class="sb-btn sb-btn-loading-spinner sb-btn-primary">
    <div class="loading-spinner" role="status" aria-hidden="true"></div>
    Primary loading
  </button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-loading-spinner sb-btn-primary">
    <div class="loading-spinner" role="status" aria-hidden="true"></div>
    Primary loading
  </button>
      `
    },
    {
      expandCode: false,
      title: 'Button States',
      demoCode: `
      <button class="sb-btn sb-btn-disabled sb-btn-normal mr-10">Primary Disable</button>
      <button class="sb-btn sb-btn-outline-disabled sb-btn-normal">Basic Button Disable</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-disabled sb-btn-normal">Primary Disable</button>
      <button class="sb-btn sb-btn-outline-disabled sb-btn-normal">Basic Button Disable</button>
      `
    },
    {
      expandCode: false,
      title: 'Colored Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-primary sb-btn-normal mr-10">Primary Button</button>
      <button class="sb-btn sb-btn-secondary sb-btn-normal mr-10">Secondary</button>
      <button class="sb-btn sb-btn-tertiary sb-btn-normal mr-10">Tertiary</button>
      <button class="sb-btn sb-btn-warning sb-btn-normal mr-10">warning</button>
      <button class="sb-btn sb-btn-error sb-btn-normal mr-10">Error</button>
      <button class="sb-btn sb-btn-info sb-btn-normal mr-10">Info</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-primary sb-btn-normal">Primary Button</button>
      <button class="sb-btn sb-btn-secondary sb-btn-normal">Secondary</button>
      <button class="sb-btn sb-btn-tertiary sb-btn-normal">Tertiary</button>
      <button class="sb-btn sb-btn-warning sb-btn-normal">warning</button>
      <button class="sb-btn sb-btn-error sb-btn-normal">Error</button>
      <button class="sb-btn sb-btn-info sb-btn-normal">Info</button>
      `
    },
    {
      expandCode: false,
      title: 'Button Sizes',
      demoCode: `
      <button class="sb-btn sb-btn-primary sb-btn-xs">mini</button>
      <button class="sb-btn sb-btn-primary sb-btn-normal">normal</button>
      <button class="sb-btn sb-btn-primary sb-btn-sm">small</button>
      <button class="sb-btn sb-btn-primary sb-btn-md">medium</button>
      <button class="sb-btn sb-btn-primary sb-btn-lg">large</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-primary sb-btn-xs">mini</button>
      <button class="sb-btn sb-btn-primary sb-btn-normal">normal</button>
      <button class="sb-btn sb-btn-primary sb-btn-sm">small</button>
      <button class="sb-btn sb-btn-primary sb-btn-md">medium</button>
      <button class="sb-btn sb-btn-primary sb-btn-lg">large</button>
      `
    }
  ];

  ngOnInit() {
  }

}
