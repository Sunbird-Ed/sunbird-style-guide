import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkuploads',
  templateUrl: './bulkuploads.component.html',
  styleUrls: ['./bulkuploads.component.scss']
})
export class BulkuploadsComponent implements OnInit {

  constructor() { }

  showUploadModal;
  uploadmodal;
  showViewDeatilsModal;
  viewdetailsmodal;

  pageTitle = 'Modals';
  uploadModalCode = ` <div class="sb-bulk-upload">
  <h4 class="my-16 bulk-upload-title">Bulk Content Upload</h4>
  <button class="sb-btn sb-btn-primary sb-btn-normal" (click)="showUploadModal = !showUploadModal">
      <i class="upload icon"></i> Upload .CSV file
  </button>
  <div class="bulk-content-upload-info mt-16">
      <p>Please upload the CSV file in the required format “Sample Upload CSV File”. Refer “user Guide” for
      instructions and guidelines to follow.</p>
  </div>
  <h4 class="mt-16 bulk-upload-title">Last upload file</h4>
<div class="sb-bulk-upload-details-report-info d-flex flex-ai-center">
    <div class="py-16 sb-bulk-upload-file d-flex flex-ai-center">
        <img src="" alt="" class="sb-upload-file mr-15">
        <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
    </div>
    <div class="sb-bulk-upload-status">
        <div class="sb-label sb-label-table sb-label-gray-0">In progress</div>
    </div>
    <div class="sb-bulk-upload-details-report flex-jc-flex-end d-flex">
        <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal ">View Report</button>
    </div>
</div>
<div class="sb-bulk-upload-details-report-info d-flex flex-ai-center">
    <div class="py-16 sb-bulk-upload-file d-flex flex-ai-center">
        <img src="" alt="" class="sb-upload-file mr-15">
        <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
    </div>
    <div class="sb-bulk-upload-status">
        <div class="sb-label sb-label-table sb-label-error-0"><i class="exclamation circle icon"></i>Completed
        with errors</div>
    </div>
    <div class="sb-bulk-upload-details-report flex-jc-flex-end d-flex">
        <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal ">View Report</button>
    </div>
</div>
<div class="sb-bulk-upload-details-report-info d-flex flex-ai-center">
    <div class="py-16 sb-bulk-upload-file d-flex flex-ai-center">
        <img src="" alt="" class="sb-upload-file mr-15">
        <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
    </div>
    <div class="sb-bulk-upload-status">
        <div class="sb-label sb-label-table sb-label-success-0">completed</div>
    </div>
    <div class="sb-bulk-upload-details-report flex-jc-flex-end d-flex">
        <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal ">View Report</button>
    </div>
</div>
</div>


<sui-modal *ngIf="showUploadModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
  [size]="'normal'" class="sb-modal" appBodyScroll (dismissed)="showUploadModal = !showUploadModal" #modal>
  <div class="sb-modal-header">
      Upload .CSV file
  </div>
  <div class="sb-modal-content">
      <p class="m-0">Please upload the CSV file in the required format</p>
      <div class="pt-16 sb-bulk-upload-file d-flex flex-ai-center">
          <img src="" alt="" class="sb-upload-file mr-15">
          <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
      </div>
      <div class="sb-bulk-upload-error-info pt-16">
        <label class="ui basic error label p-0">Validation Error ! <span class="sb-bulk-upload-extra-label">Rectify the errors and upload the file again.</span></label>
        <ul class="sb-bulk-upload-error-list mt-16 p-0 m-0">
            <li class="sb-bulk-upload-error-list-item">Mandaory column “xyz” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Mondatory coloumn “Pqr” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Column “123” contains invalid data</li>
            <li class="sb-bulk-upload-error-list-item">Mandaory column “xyz” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Mondatory coloumn “Pqr” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Column “123” contains invalid data</li>
            <li class="sb-bulk-upload-error-list-item">Mandaory column “xyz” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Mondatory coloumn “Pqr” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Column “123” contains invalid data</li>
          </ul>
      </div>
      <div class="sb-btn sb-btn-tertiary sb-btn-normal mt-16 sb-bulk-upload-btn">
          Change CSV file
          <input type="file" class="sb-btn-upload" name="file"/>
        </div>
      <div class="d-flex flex-w-wrap sb-bulk-upload-options pt-30">
        <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
          <input type="radio" id="radio1" name="example">
          <label for="radio1">Publish & Link to Textbook</label>
        </div>
        <div class="sb-radio-btn-checkbox sb-radio-btn-primary ml-8">
          <input type="radio" id="radio2" name="example">
          <label for="radio2">Publish</label>
        </div>
      </div>
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showViewDeatilsModal = !showViewDeatilsModal">
      Start Upload
    </button>
  </div>
</sui-modal>
`;
ViewDeatilsModalCode = `<div class="docs-sectionDemoCode">
<button class="sb-btn sb-btn-primary sb-btn-normal" (click)="showViewDeatilsModal = !showViewDeatilsModal">
  View Report
</button>
<sui-modal *ngIf="showViewDeatilsModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
  [size]="'normal'" class="sb-modal sb-success" appBodyScroll (dismissed)="showViewDeatilsModal = !showViewDeatilsModal" #modal>
  <div class="sb-modal-header">
      View Details
  </div>
  <div class="sb-modal-content">
      <div class="sb-bulk-upload-file d-flex flex-ai-center">
          <img src="" alt="" class="sb-upload-file mr-15">
          <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
      </div>
      <div class="sb-meta-data-container sb-meta-data-row-facing">
          <dl class="sb-meta-data sb-meta-d1 m-0">
              <dt>Title</dt>
              <dd>SNF Chapter 1 Kalrav Hindi</dd>
              <dt>Ownership</dt>
              <dd></dd>
              <dt>Organization</dt>
              <dd>NTP</dd>
              <dt>Author</dt>
              <dd>Balaji A</dd>
              <dt>Medium</dt>
              <dd></dd>
            </dl>
      </div>
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-secondary sb-btn-normal mr-8 ripple" (click)="showViewDeatilsModal = !showViewDeatilsModal">
      Download Report
    </button>
  </div>
</sui-modal>
</div>`;

  ngOnInit() {
  }

}
