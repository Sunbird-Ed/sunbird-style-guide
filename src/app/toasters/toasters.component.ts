import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-toasters',
  templateUrl: './toasters.component.html'
})
export class ToastersComponent implements OnInit {
  showLargeModal;
  section;
  expandCode;

  constructor(public iziToast: Ng2IzitoastService) { }

  // this.iziToast.question({
  //   title: "Welcome",
  //   progressBarColor: "red",
  //   onOpened: () => {
  //     console.log("opened");
  //   }
  // });
  
  pageTitle = 'Toasters';
  sections = [
    // {
    //   expandCode: false,
    //   title: 'Standard Information Toaster',
    //   demoCode: `
    //   <div class="sb-toast sb-toast-normal">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `,
    //   copyCode: `
    //   <div class="sb-toast">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `
    // },
    // {
    //   expandCode: false,
    //   title: 'Standard Success Toaster',
    //   demoCode: `
    //   <div class="sb-toast sb-toast-success sb-toast-normal">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `,
    //   copyCode: `
    //   <div class="sb-toast sb-toast-success">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `
    // },
    // {
    //   expandCode: false,
    //   title: 'Standard Warning Toaster',
    //   demoCode: `
    //   <div class="sb-toast sb-toast-warning sb-toast-normal">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `,
    //   copyCode: `
    //   <div class="sb-toast sb-toast-warning sb-toast-normal">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `
    // },
    // {
    //   expandCode: false,
    //   title: 'Standard Error Toaster',
    //   demoCode: `
    //   <div class="sb-toast sb-toast-danger sb-toast-normal">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `,
    //   copyCode: `
    //   <div class="sb-toast sb-toast-danger sb-toast-normal">
    //   <div class="sb-toast-body">
    //     <div class="sb-toast-icon"></div>
    //     <div class="sb-toast-texts">
    //       <div class="sb-toast-title">title comes here</div>
    //       <div class="sb-toast-message">message comes here</div>
    //     </div>
    //     <span class="sb-toast-close-icon"></span>
    //   </div>
    // </div>
    //   `
    // }
  ];

  ngOnInit() {
  }

}
