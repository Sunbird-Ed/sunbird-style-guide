import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-account',
  templateUrl: './merge-account.component.html',
  styleUrls: ['./merge-account.component.scss']
})
export class MergeAccountComponent implements OnInit {

  constructor() { }

  pageTitle = 'Merge Account';
  sections = [
    {
      expandCode: false,
      title: 'Merge Account',
      demoCode: `
      <div class="sb-certificatePage">
      <div class="sb-certificatePage-header mb-auto">
        <img src="assets/images/DIKSHA.svg" class="sb-certificatePage-logo" alt="DIKSHA Logo" />
      </div>
      <div class="sb-certificatePage-form mb-auto">
        <div class="sb-merged-account-content text-center mb-32">
          <h3 class="sb-merged-account-body-header my-24 font-weight-bold">Merged Account</h3>
          <p class="sb-merged-account-body-para">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p>
          <!-- <p class="sb-merged-account-body-para sb-color-warning">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p> -->
          <!-- <p class="sb-merged-account-body-para sb-color-error font-weight-bold">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p> -->
          <!-- <p class="sb-merged-account-body-para sb-color-success font-weight-bold">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p> -->
        </div>
        <div class="sb-merged-account-form text-left">
          <div class="sb-field-group">
            <label>Email Id/Phone number</label>
            <div class="sb-field">
            <input class="sb-form-control" type="text" placeholder="Enter Mobile Number" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            </div>
            <label>Password</label>
            <div class="sb-field">
            <input class="sb-form-control" type="text" placeholder="Enter Password" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
              <button class="sb-btn sb-btn-secondary sb-btn-normal width-100 mt-24 mb-8">Next</button>
            </div>
            <p class="sb-or-divider mb-0 ">OR</p>
            <button class="sb-btn sb-btn-outline-primary sb-btn-normal ripple width-100 my-16">Sign In with Google</button>

          </div>
        </div>
      </div>
      </div>
      `,
      copyCode: `
      <div class="sb-certificatePage">
      <div class="sb-certificatePage-header mb-auto">
        <img src="assets/images/DIKSHA.svg" class="sb-certificatePage-logo" alt="DIKSHA Logo" />
      </div>
      <div class="sb-certificatePage-form mb-auto">
        <div class="sb-merged-account-content text-center mb-32">
          <h3 class="sb-merged-account-body-header my-24 font-weight-bold">Merged Account</h3>
          <p class="sb-merged-account-body-para">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p>
          <!-- <p class="sb-merged-account-body-para sb-color-warning">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p> -->
          <!-- <p class="sb-merged-account-body-para sb-color-error font-weight-bold">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p> -->
          <!-- <p class="sb-merged-account-body-para sb-color-success font-weight-bold">Enter the email ID or phone number of the account from which
            you want to merge your usage details</p> -->
        </div>
        <div class="sb-merged-account-form text-left">
          <div class="sb-field-group">
            <label>Email Id/Phone number</label>
            <div class="sb-field">
            <input class="sb-form-control" type="text" placeholder="Enter Mobile Number" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            </div>
            <label>Password</label>
            <div class="sb-field">
            <input class="sb-form-control" type="text" placeholder="Enter Password" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
              <button class="sb-btn sb-btn-secondary sb-btn-normal width-100 mt-24 mb-8">Next</button>
            </div>
            <p class="sb-or-divider mb-0 ">OR</p>
            <button class="sb-btn sb-btn-outline-primary sb-btn-normal ripple width-100 my-16">Sign In with Google</button>

          </div>
        </div>
      </div>
      </div>
      `
    }

  ];

  ngOnInit() {
  }

}
