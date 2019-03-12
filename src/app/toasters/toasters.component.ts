import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-toasters',
  templateUrl: './toasters.component.html'
})
export class ToastersComponent implements OnInit {

  constructor() { }

  pageTitle = 'Toasters';
  sections = [
    {
      expandCode: false,
      title: 'Standard Information Toaster',
      demoCode: `
      <div class="sb-toast">
      <div class="sb-toast-body">
        <div class="sb-toast-icon"></div>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">title comes here</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
      copyCode: `
      <div class="sb-toast">
      <div class="sb-toast-body">
        <div class="sb-toast-icon"></div>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">title comes here</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
    },
    {
      expandCode: false,
      title: 'Standard Information Toaster',
      demoCode: `
      <div class="sb-toast sb-toast-success">
      <div class="sb-toast-body">
        <div class="sb-toast-icon"></div>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">title comes here</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
      copyCode: `
      <div class="sb-toast sb-toast-success">
      <div class="sb-toast-body">
        <div class="sb-toast-icon"></div>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">title comes here</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
    },
    {
      expandCode: false,
      title: 'Standard Information Toaster',
      demoCode: `
      <div class="sb-toast sb-toast-warning">
      <div class="sb-toast-body">
        <div class="sb-toast-icon"></div>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">title comes here</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `,
      copyCode: `
      <div class="sb-toast sb-toast-warning">
      <div class="sb-toast-body">
        <div class="sb-toast-icon"></div>
        <div class="sb-toast-texts">
          <div class="sb-toast-title">title comes here</div>
          <div class="sb-toast-message">message comes here</div>
        </div>
        <span class="sb-toast-close-icon"></span>
      </div>
    </div>
      `
    }
  ];

  ngOnInit() {
  }

}
