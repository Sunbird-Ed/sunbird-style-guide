import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-desktop-app',
  templateUrl: './offline-desktop-app.component.html',
  styleUrls: ['./offline-desktop-app.component.scss']
})
export class OfflineDesktopAppComponent implements OnInit {

  constructor() { }

  pageTitle = 'Offline - Telemetry (Desktop App)';

  sections = [
    {
      expandCode: false,
      title: 'Desktop - Telemetry Settings',
      demoCode: `
      <div class="offline-telemetry-page-title">
      Telemetry settings
</div>

<div class="d-flex flex-jc-space-between mt-24">
  <a class="offline-telemetry-title cursor-pointer">Sync telemetry automatically</a>
   <a class="offline-telemetry-clear-title cursor-pointer">Clear Telemetry</a>
</div>

<div class="sb-radio-btn sb-radio-primary mt-24">
  <input type="radio" id="alwaysOn" name="radio-group">
  <label for="alwaysOn">Always on</label>
</div>
<div class="sb-radio-btn sb-radio-primary">
  <input type="radio" id="off" name="radio-group">
  <label for="off">Off</label>
</div>
<div class="d-flex mt-16">
<div class="">
    <button type="button" class="sb-btn sb-btn-primary sb-btn-normal mr-8">Sync Telemetry (500KB)&#x200E;</button>
    <dl class="mt-8 mb-0">
        <dt class="multiline-list-key">Last synced:</dt>
        <dd class="multiline-list-value">19 February 2019 at 6:40 PM</dd>
    </dl>
</div>
<div class="ml-24">
    <button type="button" class="sb-btn sb-btn-secondary sb-btn-normal mr-8">Share Telemetry (500KB)&#x200E;</button>
    <dl class="mt-8 mb-0">
      <dt class="multiline-list-key">Last shared:</dt>
      <dd class="multiline-list-value">19 February 2019 at 6:40 PM</dd>
    </dl>
</div>
</div>
<ul class="sb-bordered-list mt-24">
  <li class="sb-bordered-list-item m-0">
  <div class="d-flex flex-ai-center">
  <div class="sb-bordered-list-item-title">Files imported (03)&#x200E;</div>
  <div class="sb-bordered-list-item-title-extra ml-16">Total size: 75KB</div>
  </div>
  </li>
  <li class="sb-bordered-list-item m-0">
  <div class="d-flex flex-ai-center">
  <div class="sb-bordered-list-item-heading">File_1.gsa</div>
  <div class="sb-bordered-list-item-subheading ml-16">19 February 2019 at 6:40 PM, 25KB</div>
  </div>
  </li>
  <li class="sb-bordered-list-item m-0">
  <div class="d-flex flex-ai-center">
  <div class="sb-bordered-list-item-heading">File_2.gsa</div>
  <div class="sb-bordered-list-item-subheading ml-16">19 February 2019 at 6:40 PM, 25KB</div>
  </div>
  </li>
  </ul>
      `,
      copyCode: `
      
      `
    },
    {
      expandCode: false,
      title: 'Desktop - About App',
      demoCode: `
      <div class="offline-telemetry-page-title">
   About App
 </div>

<h2 class="about-app-heading mt-24">***** Lite Desktop App</h2>
<div class="d-flex flex-jc-space-between">
<div class="">
  <dl class="mt-8 mb-0">
    <div class="d-flex">
      <dt class="description-list-key description-list-key-small">Version:</dt>
      <dd class="description-list-value description-list-value-small">0.12.12</dd>
    </div>
  </dl>
  <dl class="mt-8 mb-0">
    <div class="d-flex">
      <dt class="description-list-key description-list-key-small">Release Date:</dt>
      <dd class="description-list-value description-list-value-small">12/12/19</dd>
    </div>
  </dl>
  <dl class="mt-8 mb-0">
    <div class="d-flex">
      <dt class="description-list-key description-list-key-small">Supported Languages:</dt>
      <dd class="description-list-value description-list-value-small"> English, Hindi, Tamil, Bengali</dd>
    </div>
  </dl>
</div>
<div class="about-app-left-content">
  <button type="button" class="sb-btn sb-btn-secondary sb-btn-normal">Update ***** Desktop</button>
  <div class="about-app-update-text cursor-pointer mt-16">Update available for version 0.12.16</div>
</div>
</div>

      `,
      copyCode: `
      
      `
    },
    {
      expandCode: false,
      title: 'Desktop - You are offline',
      demoCode: `
      <div class="d-flex flex-ai-center flex-jc-center offline-page-content">
      <div class="text-center">
             <img src="assets/images/offline-cloud.png" alt="offline computer image">
             <h2 class="offline-page-heading text-center">You are offline</h2>
             <div class="offline-page-subheading mt-8">Please connect to the internet to view content</div>        
            </div>
      </div>
      `,
      copyCode: `
      `
    },
    {
      expandCode: false,
      title: 'How to video',
      demoCode: `
      <div class="ui stackable grid">
      <div class="column">
        <div class="offline-watch-video mx-auto">
          <div class="mb-16">
            <span class="offline-video-heading">How to Video</span>
            <span class="offline-video-title right-floated"><i class="download icon"></i> Download PDF</span>
          </div>
          <video controls="" class="offline-video">
            <source
              src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/assets/do_312719162116210688118940/1e9id3spwfzvobzbuyonlibqgwl2r-de6_1_streamed.mp4">
          </video>
        </div>
      </div>
    </div>
      `,
      copyCode: `
      `
    },
    {
      expandCode: false,
      title: 'Import content',
      demoCode: `
     <div class="ui grid sb-offline-import-content py-8">
<div class="ui container grid p-0 m-0 relative">
<div class="sb-offline-brake"></div>
     <div class="six wide column sb-offline-imports p-0 pr-16">
      <div class="sb-offline-area d-flex p-16">
        <div class="sb-import-icon">
        <img src="assets/images/usb.svg" alt="offline import">
        </div>
        <div class="sb-import-content">
          <h4 class="sb-import-content-title">Import content</h4>
          <p class="mb-0 sb-import-content-meta">Import contents by uploading an .CSV file. </p>
        </div>
        <button class="sb-btn sb-btn-normal sb-btn-secondary ml-auto">
          Import Files
        </button>
      </div>
    </div>

    <div class="six wide column sb-offline-imports sb-offline-video-demo p-0 pl-16">
    <div class="sb-offline-area d-flex p-16">
      <div class="sb-import-icon sb-import-icon-watch-video">
      <img src="assets/images/offline-import-book.png" alt="offline watch video">
      </div>
      <div class="sb-import-content">
        <h4 class="sb-import-content-title">How to video</h4>
        <p class="mb-0 sb-import-content-meta">Subtopic:Limits of artificial intelligence</p>
      </div>
      <button class="sb-btn sb-btn-normal sb-btn-secondary ml-auto sb-btn-tertiary">
        watch video
      </button>
    </div>
   </div>
     </div>
     </div>
      `,
      copyCode: `
      `
    }
  ];

  ngOnInit() {
  }

}
