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
  UpdateRecoveryIDModalCode = ` <sui-modal *ngIf="showUpdateRecoveryIDModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
  [size]="'normal'" class="sb-modal" appBodyScroll
  (dismissed)="showUpdateRecoveryIDModal = !showUpdateRecoveryIDModal" #modal>
  <div class="sb-modal-header">
    Update Recovery ID
  </div>
  <div class="sb-modal-content">
    <p>
      A recovery account helps you to regain access to your account if you are locked out or forget your password. Choose the recovery acount type and enter details
    </p>
    <div class="d-flex flex-w-wrap">
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
        <input type="radio" id="email" name="options" checked>
        <label for="email">Email Address</label>
      </div>
      <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
        <input type="radio" id="phone" name="options">
        <label for="phone">Phone Number</label>
      </div>
    </div>
    <div class="sb-field">
      <input class="sb-form-control is-invalid" formcontrolname="email" placeholder="Enter Email Address" type="email">
      <span class="sb-color-error fxsmall mt-8">
      This email address is the same as what is linked with your profile
    </span>
    </div>
    <div class="sb-field">
      <input class="sb-form-control" formcontrolname="phone" placeholder="Enter Phone Number" type="tel">
      <span class="sb-color-error fxsmall mt-8 hide">
         Please enter 10 digit phone number 
        </span>
    </div>
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary disabled">
      Submit
    </button>
  </div>
</sui-modal>
`;
  ngOnInit() {
  }

}
