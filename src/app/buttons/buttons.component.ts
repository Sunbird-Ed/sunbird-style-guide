import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  pageTitle  = 'Buttons';
  sections = [
    {
      expandCode: false,
      title: 'Basic Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-outline-primary sb-btn-normal mr-8">Primary Button/Info</button>
      <button class="sb-btn sb-btn-outline-secondary sb-btn-normal mr-8">Secondary/Success</button>
      <button class="sb-btn sb-btn-outline-tertiary sb-btn-normal mr-8">Tertiary/Warning</button>
      <button class="sb-btn sb-btn-outline-error sb-btn-normal mr-8">Error</button>
      <button class="sb-btn sb-btn-outline-gray sb-btn-normal">Default</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-outline-primary sb-btn-normal mr-8">Primary Button/Info</button>
      <button class="sb-btn sb-btn-outline-secondary sb-btn-normal mr-8">Secondary/Success</button>
      <button class="sb-btn sb-btn-outline-tertiary sb-btn-normal mr-8">Tertiary/Warning</button>
      <button class="sb-btn sb-btn-outline-error sb-btn-normal mr-8">Error</button>
      <button class="sb-btn sb-btn-outline-gray sb-btn-normal">Default</button>
      `
    },
    {
      expandCode: false,
      title: 'Colored Buttons',
      demoCode: `
      <button class="sb-btn sb-btn-primary sb-btn-normal mr-8">Primary Button/Info</button>
      <button class="sb-btn sb-btn-secondary sb-btn-normal mr-8">Secondary/Success</button>
      <button class="sb-btn sb-btn-tertiary sb-btn-normal mr-8">Tertiary/Warning</button>
      <button class="sb-btn sb-btn-error sb-btn-normal mr-8">Error</button>
      <button class="sb-btn sb-btn-gray sb-btn-normal">Gray</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-primary sb-btn-normal mr-8">Primary Button/Info</button>
      <button class="sb-btn sb-btn-secondary sb-btn-normal mr-8">Secondary/Success</button>
      <button class="sb-btn sb-btn-tertiary sb-btn-normal mr-8">Tertiary/Warning</button>
      <button class="sb-btn sb-btn-error sb-btn-normal mr-8">Error</button>
      <button class="sb-btn sb-btn-gray sb-btn-normal">Gray</button>
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
      <button class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn">View More<i class="chevron down icon"></i></button>
<button class="sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn"><i class="home icon"></i>Home</button>
<button class="sb-btn sb-btn-normal sb-btn-outline-error sb-left-icon-btn"><i class="trash alternate outline icon"></i>Remove All</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn">View More<i class="chevron down icon"></i></button>
<button class="sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn"><i class="home icon"></i>Home</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="trash alternate outline icon"></i>Remove All</button>
      `
    },
    {
      expandCode: false,
      title: 'Text Link Buttons',
      demoCode: `
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary">Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary">Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary">Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error">Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray">Text Link</button>
<div class="sb-spacer48"></div>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary">Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary">Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary">Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error">Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray">Text Link</button>
      <div class="sb-spacer48"></div>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
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
      title: 'Button Sizes',
      demoCode: `
      <button class="sb-btn sb-btn-primary sb-btn-xs">mini</button>
      <button class="sb-btn sb-btn-primary sb-btn-normal">normal</button>
      <button class="sb-btn sb-btn-primary sb-btn-sm">small</button>
      <button class="sb-btn sb-btn-primary sb-btn-md">medium</button>
      <button class="sb-btn sb-btn-primary sb-btn-lg">large</button>
      <div class="sb-spacer48"></div>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-xs"><i class="home icon"></i>Mini</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-normal"><i class="home icon"></i>Normal</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-sm"><i class="home icon"></i>Small</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md"><i class="home icon"></i>Medium</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-lg"><i class="home icon"></i>Large</button>
      `,
      copyCode: `
      <button class="sb-btn sb-btn-primary sb-btn-xs">Mini</button>
      <button class="sb-btn sb-btn-primary sb-btn-normal">Normal</button>
      <button class="sb-btn sb-btn-primary sb-btn-sm">Small</button>
      <button class="sb-btn sb-btn-primary sb-btn-md">medium</button>
      <button class="sb-btn sb-btn-primary sb-btn-lg">large</button>
      <div class="sb-spacer48"></div>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-xs"><i class="home icon"></i>Mini</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-normal"><i class="home icon"></i>Normal</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-sm"><i class="home icon"></i>Small</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md"><i class="home icon"></i>Medium</button>
      <button class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-lg"><i class="home icon"></i>Large</button>
      `
    }
  ];

  ngOnInit() {
  }

}
