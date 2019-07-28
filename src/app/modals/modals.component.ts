import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html'
})
export class ModalsComponent implements OnInit {

  constructor() { }

  showLargeModal;
  largemodal;
  showNormalModal;
  normalmodal;
  showSmallModal;
  smallmodal;
  showFullscreenModal;
  fullscreenmodal;
  showSuccessModal;
  showSuccessModalCenter;
  showSuccessModalContentCenter;
  successmodal;
  showErrorModal;
  errormodal;
  showWarningModal;
  warningmodal;
  ShowTabModal;
  TabModal;
  showCenterAlignedModal; showCenterAlignedModal1;
  CenterAlignedModal;

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
  smallModalCode = `<sui-modal *ngIf="showSmallModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'small'"
  class="sb-modal " appBodyScroll (dismissed)="showSmallModal = !showSmallModal" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showSmallModal = !showSmallModal">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-primary" (click)="showSmallModal = !showSmallModal">
      No
    </button>
  </div>
</sui-modal>`;
  fullscreenModalCode = `<sui-modal *ngIf="showFullscreenModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
  [size]="'fullscreen'" class="sb-modal sb-modal-fullscreen" appBodyScroll
  (dismissed)="showFullscreenModal = !showFullscreenModal" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showFullscreenModal = !showFullscreenModal">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-primary" (click)="showFullscreenModal = !showFullscreenModal">
      No
    </button>
  </div>
</sui-modal>`;
  successModalCode = `<sui-modal *ngIf="showSuccessModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'small'"
  class="sb-modal sb-success" appBodyScroll (dismissed)="showSuccessModal = !showSuccessModal" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-success" (click)="showSuccessModal = !showSuccessModal">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-success" (click)="showSuccessModal = !showSuccessModal">
      No
    </button>
  </div>
</sui-modal>`;
  errorModalCode = `<sui-modal *ngIf="showErrorModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'small'"
  class="sb-modal sb-error" appBodyScroll (dismissed)="showErrorModal = !showErrorModal" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-error" (click)="showErrorModal = !showErrorModal">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-error" (click)="showErrorModal = !showErrorModal">
      No
    </button>
  </div>
</sui-modal>`;
  warningModalCode = `<sui-modal *ngIf="showWarningModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'small'"
  class="sb-modal sb-warning" appBodyScroll (dismissed)="showWarningModal = !showWarningModal" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-warning" (click)="showWarningModal = !showWarningModal">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-warning" (click)="showWarningModal = !showWarningModal">
      No
    </button>
  </div>
</sui-modal>`;
  tabModalCode = `<sui-modal *ngIf="ShowTabModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'normal'"
  class="sb-modal" appBodyScroll (dismissed)="ShowTabModal = !ShowTabModal" #modal>
  <div class="sb-modal-header">
    Modal with Tab Design
  </div>
  <div class="sb-modal-content sb-modal-tab">
    <sui-tabset>
      <div class="ui pointing secondary menu">
        <a class="item" suiTabHeader="1">Nested 1</a>
        <a class="item" suiTabHeader="2">Nested 2</a>
      </div>
      <div class="ui container" suiTabContent="1">First nested tab!</div>
      <div class="ui container" suiTabContent="2">Second nested tab!</div>
    </sui-tabset>
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="ShowTabModal = !ShowTabModal">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-primary" (click)="ShowTabModal = !ShowTabModal">
      No
    </button>
  </div>
</sui-modal>`;

  CenterAlignedModalCode = `<sui-modal *ngIf="showCenterAlignedModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
  [size]="'small'" class="sb-modal sb-modal-center" appBodyScroll
  (dismissed)="showSuccessModalCenter = !showSuccessModalCenter" #modal>
  <div class="sb-modal-header">
    Modal Heading
  </div>
  <div class="sb-modal-content">
    Modal Content
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showCenterAlignedModal = !showCenterAlignedModal">
      Yes
    </button>
    <button class="sb-btn sb-btn-normal sb-btn-outline-primary"
      (click)="showCenterAlignedModal = !showCenterAlignedModal">
      No
    </button>
  </div>
</sui-modal>
`;

  ngOnInit() {
  }

}
