import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-download-manager',
  templateUrl: './offline-download-manager.component.html',
  styleUrls: ['./offline-download-manager.component.scss']
})
export class OfflineDownloadManagerComponent implements OnInit {

  value = '20';
  showNormalModal = false;
  constructor() { }

  pageTitle = 'Merge Account';
  sections = [
    {
      expandCode: false,
      title: 'Merge Account',
      demoCode: `
      <!-- <div class="sb-offline-download-manager-container">
  <div class="sb-download-manager-header">
    <span class="header-text">Content Manager</span>
    <button class="close-button">&#10006;</button>
  </div>
  <div class="sb-offline-download-manager">
    <div class="download-name">Downloading Content Manager with minimum number</div>
    <div class="download-number-content">
      <span class="number-downloaded">0/350MB</span>
      <span class="download-status failed">&#9888;&nbsp;Download Failed</span>
    </div>
    
  </div>
  <div class="sb-offline-download-manager">
    <div class="download-name">Downloading Content Manager with minimum number</div>
    <div class="download-number-content">
      <span class="number-downloaded">0/350MB</span>
      <span class="download-status success">&#9888;&nbsp;Completed</span>
    </div>
    <div class="download-progressbar-container">
      <div class="download-progress">
        <div class="download-progress-bar" [ngStyle]="{'width': value + '%'}"></div>
      </div>
      <span class="download-percent">45%</span>
    </div>
  </div>
</div> -->
<!-- 
<div class="sb-offline-download-manager">
  <button class="close-btn"></button>
  <div id="progressDiv" class="download-progress-container">
    <div class="download-name-content">
      <div class="download-name">Downloading Content name to be changed by the developer</div>
      <span class="files-downloaded">Copying 77/100</span>
    </div>

    <div class="download-number-content">
      <span class="number-downloaded">10mb/90mb</span>
      <span class="sb-label sb-label-table sb-label-success-0"><span class="success-icon"></span> Downloaded</span>
      <span class="sb-label sb-label-table sb-label-warning-0">Inprogress...</span>
      <span class="sb-label sb-label-table sb-label-error-0">Failed</span>
    </div>

    <div class="download-progressbar-container">
      <div class="download-progress">
        <div class="download-progress-bar" style="width:40%"></div>
      </div>
      <span class="download-percent">40%</span>
    </div>
  </div>

  <div id="failedDiv">

    <div class="download-failed-button-container">
      <button class="sb-btn sb-btn-xs sb-btn-error">Failed Downloads (5)  <span class="arrow-down-icon"></span></button>
    </div>
    <hr>
    <div class="download-failed-container">

      <div class="download-failed-files">
        <span class="failed-file-name">Downloading Content name to be changed by the developer</span>
      </div>
      <div class="download-failed-files">
        <span class="failed-file-name">Downloading Content name to be changed by the developer</span>
      </div>
    </div>
  </div>
</div> -->

<div class="container my-16 sb-certificate-trained">
  <div class="d-flex flex-ai-center sb-ct-list list-heading">
    <label class="mb-0">Trainings attended (15)</label>
  </div>
  <div class="d-flex flex-ai-center sb-ct-list list-item">
    <label class="mr-auto mb-0">Systems and Routiens -1</label>
    <span class="list-date mr-8">Jan 19</span>
    <a class=""><i class="download icon"></i>Download</a>
    <a class=""><i class="download icon"></i>Share</a>
  </div>
  <div class="d-flex flex-ai-center sb-ct-list list-item">
    <label class="mr-auto mb-0">Sachin invite Batch</label>
    <span class="list-date mr-8">Feb 19</span>
    <a class=""><i class="download icon"></i>Share</a>
  </div>
  <div class="d-flex flex-ai-center sb-ct-list list-item">
    <label class="mr-auto mb-0">Sachin invite Batch</label>
    <span class="list-date mr-8">Feb 19</span>
    <div class="sb-certificate-trained-line d-flex flex-ai-center flex-jc-center">
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </div>
  <div class="d-flex flex-ai-center flex-jc-center sb-ct-list list-item">
    <button class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn"(click)="showNormalModal = !showNormalModal" >+11 More<i class="chevron down icon"></i></button>
  </div>
</div>

      `,
      copyCode: `
        <div class="container my-16 sb-certificate-trained">
          <div class="d-flex flex-ai-center sb-ct-list list-heading">
            <label class="mb-0">Trainings attended (15)</label>
          </div>
          <div class="d-flex flex-ai-center sb-ct-list list-item">
            <label class="mr-auto mb-0">Systems and Routiens -1</label>
            <span class="list-date mr-8">Jan 19</span>
            <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="download icon"></i>Download</button>
            <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="download icon"></i>Share</button>
          </div>
          <div class="d-flex flex-ai-center sb-ct-list list-item">
            <label class="mr-auto mb-0">Sachin invite Batch</label>
            <span class="list-date mr-8">Feb 19</span>
            <button class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-left-icon-btn"><i class="download icon"></i>Share</button>
          </div>
          <div class="d-flex flex-ai-center sb-ct-list list-item">
            <label class="mr-auto mb-0">Sachin invite Batch</label>
            <span class="list-date mr-8">Feb 19</span>
            <div class="sb-certificate-trained-line d-flex flex-ai-center flex-jc-center">
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </div>
          <div class="d-flex flex-ai-center flex-jc-center sb-ct-list list-item">
            <button class="sb-btn sb-btn-normal sb-btn-primary sb-right-icon-btn"(click)="showNormalModal = !showNormalModal" >+11 More<i class="chevron down icon"></i></button>
          </div>
        </div>

        <sui-modal *ngIf="showNormalModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
              [size]="'normal'" class="sb-modal" appBodyScroll (dismissed)="showNormalModal = !showNormalModal" #modal>
              <div class="sb-modal-header">
                Modal Heading
              </div>
              <div class="sb-modal-content">
                <div class="sb-merge-account-modal">
                  <p class="mb-8">If you have two accounts with DIKSHA, click <b>Merge</b> to:</p>
                    <ul class="m-0">
                      <li class="mb-8">
                        Combine usage details of the other account with this account
                      </li>
                      <li class="mb-8">
                        delete the other account
                      </li>
                    </ul>
                    <p>Else, click <b>Cancel</b></p>
                </div>
              </div>
              <div class="sb-modal-actions">
                <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showNormalModal = !showNormalModal">
                  Merge
                </button>
                <button class="sb-btn sb-btn-normal sb-btn-outline-primary" (click)="showNormalModal = !showNormalModal">
                  Cancel
                </button>
              </div>
            </sui-modal>
      `
    }

  ];

  ngOnInit() {
  }

}
