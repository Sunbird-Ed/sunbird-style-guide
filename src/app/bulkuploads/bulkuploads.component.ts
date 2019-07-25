import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkuploads',
  templateUrl: './bulkuploads.component.html'
})
export class BulkuploadsComponent implements OnInit {

  constructor() { }

  showLargeModal;
  largemodal;
  showNormalModal;
  normalmodal;

  pageTitle = 'Modals';
  largeModalCode = `<sui-modal *ngIf="showLargeModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'large'"
  class="sb-modal" appBodyScroll (dismissed)="showLargeModal = !showLargeModal" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="doSomething()">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-primary" (click)="doSomething()">
      No
    </button>
  </div>
</sui-modal>`;
  normalModalCode = `<sui-modal *ngIf="showNormalModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'normal'"
  class="sb-modal" appBodyScroll (dismissed)="showNormalModal = !showNormalModal" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="doSomething()">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-primary" (click)="doSomething()">
      No
    </button>
  </div>
</sui-modal>
`;

  ngOnInit() {
  }

}
