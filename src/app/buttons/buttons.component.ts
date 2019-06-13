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
      <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal mr-8 ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn sb-btn-outline-secondary sb-btn-normal mr-8 ripple">Secondary/Success</button>
      <button type="button" class="sb-btn sb-btn-outline-tertiary sb-btn-normal mr-8 ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn sb-btn-outline-error sb-btn-normal mr-8 ripple">Error</button>
      <button type="button" class="sb-btn sb-btn-outline-gray sb-btn-normal ripple">Default</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn sb-btn-outline-secondary sb-btn-normal ripple">Secondary/Success</button>
      <button type="button" class="sb-btn sb-btn-outline-tertiary sb-btn-normal ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn sb-btn-outline-error sb-btn-normal ripple">Error</button>
      <button type="button" class="sb-btn sb-btn-outline-gray sb-btn-normal ripple">Default</button>
      `
    },
    {
      expandCode: false,
      title: 'Colored Buttons',
      demoCode: `
      <button type="button" class="sb-btn sb-btn-primary sb-btn-normal mr-8 ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn sb-btn-secondary sb-btn-normal mr-8 ripple">Secondary/Success</button>
      <button type="button" class="sb-btn sb-btn-tertiary sb-btn-normal mr-8 ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn sb-btn-error sb-btn-normal mr-8 ripple">Error</button>
      <button type="button" class="sb-btn sb-btn-gray sb-btn-normal mr-8 ripple">Gray</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-primary sb-btn-normal ripple">Primary Button/Info</button>
      <button type="button" class="sb-btn sb-btn-secondary sb-btn-normal ripple">Secondary/Success</button>
      <button type="button" class="sb-btn sb-btn-tertiary sb-btn-normal ripple">Tertiary/Warning</button>
      <button type="button" class="sb-btn sb-btn-error sb-btn-normal ripple">Error</button>
      <button type="button" class="sb-btn sb-btn-gray sb-btn-normal ripple">Gray</button>
      `
    },
    {
      expandCode: false,
      title: 'Button Groups',
      demoCode: `
      <div class="btn-group">
      <button type="button" class="sb-btn sb-btn-normal"><i class="plus icon"></i></button>
      <button type="button" class="sb-btn sb-btn-normal active"><i class="plus icon"></i></button>
      </div>
      `,
      copyCode: `
      <div class="btn-group">
      <button type="button" class="sb-btn sb-btn-normal"><i class="plus icon"></i></button>
      <button type="button" class="sb-btn sb-btn-normal active"><i class="plus icon"></i></button>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Dashed Buttons',
      demoCode: `
      <button type="button" class="sb-btn sb-btn-normal sb-btn-dashed sb-btn-dashed-primary mr-8">Basic Button</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-normal sb-btn-dashed sb-btn-dashed-primary">Basic Button</button>
      `
    },
    {
      expandCode: false,
      title: 'Icon Buttons',
      demoCode: `
      <button type="button" class="sb-btn sb-btn-normal sb-btn-outline-primary sb-right-icon-btn mr-8">Sort by <i class="chevron down icon"></i></button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn mr-8">View More<i class="chevron down icon"></i></button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn mr-8"><i class="home icon"></i>Home</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-outline-error sb-left-icon-btn mr-8"><i class="trash alternate outline icon"></i>Remove All</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-normal sb-btn-outline-primary sb-right-icon-btn">Sort by <i class="chevron down icon"></i></button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn">View More<i class="chevron down icon"></i></button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-primary sb-left-icon-btn"><i class="home icon"></i>Home</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-outline-error sb-left-icon-btn"><i class="trash alternate outline icon"></i>Remove All</button>
      `
    },
    {
      expandCode: false,
      title: 'Text Link Buttons',
      demoCode: `
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary mr-8">Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary mr-8">Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary mr-8">Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error mr-8">Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray mr-8">Text Link</button>
<div class="sb-spacer48"></div>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
<button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary">Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary">Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary">Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error">Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray">Text Link</button>
      <div class="sb-spacer48"></div>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-secondary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-tertiary sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-error sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-gray sb-left-icon-btn"><i class="home icon"></i>Text Link</button>
      `
    },
    {
      expandCode: false,
      title: 'Loading Button',
      demoCode: `
      <button type="button" class="sb-btn sb-btn-loading-spinner sb-btn-primary">
    <div class="loading-spinner" role="status" aria-hidden="true"></div>
    Primary loading
  </button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-loading-spinner sb-btn-primary">
    <div class="loading-spinner" role="status" aria-hidden="true"></div>
    Primary loading
  </button>
      `
    },
    {
      expandCode: false,
      title: 'Button States',
      demoCode: `
      <button type="button" class="sb-btn sb-btn-disabled sb-btn-normal  mr-8">Primary Disable</button>
      <button type="button" class="sb-btn sb-btn-outline-disabled sb-btn-normal">Basic Button Disable</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-disabled sb-btn-normal">Primary Disable</button>
      <button type="button" class="sb-btn sb-btn-outline-disabled sb-btn-normal">Basic Button Disable</button>
      `
    },
  
    {
      expandCode: false,
      title: 'Button Sizes',
      demoCode: `
      <button type="button" class="sb-btn sb-btn-primary sb-btn-xs mr-8">mini</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-normal mr-8">normal</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-sm mr-8">small</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-md mr-8">medium</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-lg mr-8">large</button>
      <div class="sb-spacer48"></div>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-xs mr-8"><i class="home icon"></i>Mini</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-normal mr-8"><i class="home icon"></i>Normal</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-sm mr-8"><i class="home icon"></i>Small</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md mr-8"><i class="home icon"></i>Medium</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-lg mr-8"><i class="home icon"></i>Large</button>
      `,
      copyCode: `
      <button type="button" class="sb-btn sb-btn-primary sb-btn-xs">Mini</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-normal">Normal</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-sm">Small</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-md">medium</button>
      <button type="button" class="sb-btn sb-btn-primary sb-btn-lg">large</button>
      <div class="sb-spacer48"></div>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-xs"><i class="home icon"></i>Mini</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-normal"><i class="home icon"></i>Normal</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-sm"><i class="home icon"></i>Small</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-md"><i class="home icon"></i>Medium</button>
      <button type="button" class="sb-btn sb-btn-primary sb-left-icon-btn sb-btn-lg"><i class="home icon"></i>Large</button>
      `
    },
    {
      expandCode: false,
      title: 'Dropdowns',
      demoCode: `
      <div class="ui dropdown sb-dotted-dropdown"
                            suiDropdown autoClose="itemClick">
                            <div class="p-8 w-auto"><span class="sb-dotmenu"></span></div>
                            <div class="menu" suiDropdownMenu style="right: 0;left: auto;">
                                <div class="item">Edit</div> 
                                <div class="item">Share</div>
                                <div class="item">Preview</div>
                                <div class="item">Delete</div>
                            </div>
                        </div>
      `,
      copyCode: `
      <div class="ui dropdown sb-dotted-dropdown" 
                            suiDropdown autoClose="itemClick">
                            <div class="p-8 w-auto"><span class="sb-dotmenu"></span></div>
                            <div class="menu" suiDropdownMenu style="right: 0;left: auto;">
                                <div class="item">Edit</div>
                                <div class="item">Share</div>
                                <div class="item">Preview</div>
                                <div class="item">Delete</div>
                            </div>
                        </div>
      `
    }
  ];

  ngOnInit() {
  }

}