import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-telemetry',
  templateUrl: './offline-telemetry.component.html',
  styleUrls: ['./offline-telemetry.component.scss']
})
export class OfflineTelemetryComponent implements OnInit {

  constructor() { }

  pageTitle = 'Offline - Telemetry';

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
  <li class="sb-bordered-list-item">
  <div class="d-flex flex-ai-center">
  <div class="sb-bordered-list-item-title">Files imported (03)&#x200E;</div>
  <div class="sb-bordered-list-item-title-extra ml-16">Total size: 75KB</div>
  </div>
  </li>
  <li class="sb-bordered-list-item">
  <div class="d-flex flex-ai-center">
  <div class="sb-bordered-list-item-heading">File_1.gsa</div>
  <div class="sb-bordered-list-item-subheading ml-16">19 February 2019 at 6:40 PM, 25KB</div>
  </div>
  </li>
  <li class="sb-bordered-list-item">
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

<h2 class="about-app-heading mt-24">DIKSHA Lite Desktop App</h2>
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
  <button type="button" class="sb-btn sb-btn-secondary sb-btn-normal">Update DIKSHA Desktop</button>
  <div class="about-app-update-text cursor-pointer mt-16">Update available for version 0.12.16</div>
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
