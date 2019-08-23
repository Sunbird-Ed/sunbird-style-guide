import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {
  example = true;
  constructor() { }
  showUpdateRecoveryIDModal;
  updateRecoverymodal;
  pageTitle = 'Modals';
  UpdateRecoveryIDModalCode = `<sui-modal *ngIf="showUpdateRecoveryIDModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'normal'"
  class="sb-modal" appBodyScroll (dismissed)="showUpdateRecoveryIDModal = !showUpdateRecoveryIDModal" #modal>
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
