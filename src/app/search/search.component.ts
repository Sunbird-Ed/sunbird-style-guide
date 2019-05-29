import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

  pageTitle = 'Search';
  sections = [
    {
      expandCode: false,
      title: 'Searchbox - Full width',
      demoCode: `
      <div class="sb-search-box">
    <div class="input-div relative">
        <i class="search icon"></i>
        <input class="sb-search-input" type="text" placeholder="Search..." />
        <i class="close icon"></i>
        <div class="sb-loader"></div>
    </div>
    <button class="sb-btn sb-btn-normal">Search</button>
</div>
      `,
      copyCode: `
      <div class="sb-search-box">
      <div class="input-div relative">
          <i class="search icon"></i>
          <input class="sb-search-input" type="text" placeholder="Search..." />
          <i class="close icon"></i>
          <div class="sb-loader"></div>
      </div>
      <button class="sb-btn sb-btn-normal">Search</button>
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Searchbox - Large',
      demoCode: `
      <div class="sb-search-box large">
    <div class="input-div relative">
        <i class="search icon"></i>
        <input class="sb-search-input" type="text" placeholder="Search..." />
        <i class="close icon"></i>
        <div class="sb-loader"></div>
    </div>
    <button class="sb-btn sb-btn-normal">Search</button>
</div>
      `,
      copyCode: `
      <div class="sb-search-box large">
      <div class="input-div relative">
          <i class="search icon"></i>
          <input class="sb-search-input" type="text" placeholder="Search..." />
          <i class="close icon"></i>
          <div class="sb-loader"></div>
      </div>
      <button class="sb-btn sb-btn-normal">Search</button>
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Searchbox - Medium',
      demoCode: `
      <div class="sb-search-box medium">
    <div class="input-div relative">
        <i class="search icon"></i>
        <input class="sb-search-input" type="text" placeholder="Search..." />
        <i class="close icon"></i>
        <div class="sb-loader"></div>
    </div>
    <button class="sb-btn sb-btn-normal">Search</button>
</div>
      `,
      copyCode: `
      <div class="sb-search-box medium">
      <div class="input-div relative">
          <i class="search icon"></i>
          <input class="sb-search-input" type="text" placeholder="Search..." />
          <i class="close icon"></i>
          <div class="sb-loader"></div>
      </div>
      <button class="sb-btn sb-btn-normal">Search</button>
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Searchbox - Small',
      demoCode: `
      <div class="sb-search-box small">
      <div class="input-div relative">
          <i class="search icon"></i>
          <input class="sb-search-input" type="text" placeholder="Search..." />
          <i class="close icon"></i>
          <div class="sb-loader"></div>
      </div>
      <button class="sb-btn sb-btn-normal">Search</button>
  </div>
      `,
      copyCode: `
      <div class="sb-search-box small">
      <div class="input-div relative">
          <i class="search icon"></i>
          <input class="sb-search-input" type="text" placeholder="Search..." />
          <i class="close icon"></i>
          <div class="sb-loader"></div>
      </div>
      <button class="sb-btn sb-btn-normal">Search</button>
  </div>
      `
    },
    {
      expandCode: false,
      title: 'Searchbox - No Button',
      demoCode: `
      <div class="sb-search-box small no-btn">
    <div class="input-div relative">
        <i class="search icon"></i>
        <input class="sb-search-input" type="text" placeholder="Search..." />
        <i class="close icon"></i>
        <div class="sb-loader"></div>
    </div>
    <button class="sb-btn sb-btn-normal">Search</button>
</div>
      `,
      copyCode: `
      <div class="sb-search-box small no-btn">
    <div class="input-div relative">
        <i class="search icon"></i>
        <input class="sb-search-input" type="text" placeholder="Search..." />
        <i class="close icon"></i>
        <div class="sb-loader"></div>
    </div>
    <button class="sb-btn sb-btn-normal">Search</button>
</div>
      `
    },
    {
      expandCode: false,
      title: 'Searchbox - Disabled',
      demoCode: `
      <div class="sb-search-box large disabled">
      <div class="input-div relative">
          <i class="search icon"></i>
          <input class="sb-search-input" type="text" placeholder="Search..." />
          <i class="close icon"></i>
      </div>
      <button class="sb-btn sb-btn-normal">Search</button>
  </div>
      `,
      copyCode: `
      <div class="sb-search-box large disabled">
    <div class="input-div relative">
        <i class="search icon"></i>
        <input class="sb-search-input" type="text" placeholder="Search..." />
        <i class="close icon"></i>
    </div>
    <button class="sb-btn sb-btn-normal">Search</button>
</div>
      `
    }
  ];

  ngOnInit() {
  }

}
