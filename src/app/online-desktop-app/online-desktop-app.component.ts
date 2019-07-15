import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-desktop-app',
  templateUrl: './online-desktop-app.component.html',
  styleUrls: ['./online-desktop-app.component.scss']
})
export class OnlineDesktopAppComponent implements OnInit {

  constructor() { }

  pageTitle = 'Offline UI (Desktop App)';

  sections = [
    {
      expandCode: false,
      title: 'Desktop - Notification Bar',
      demoCode: `
      <div class="ui fluid container">
      <div class="ui container sb-banner mt-24 sb-sticky-top">
  <div class="sb-banner-content">
    <div class="sb-banner-content-right">
      <div class="sb-banner-heading cursor-pointer">Download ***** Lite Desktop App</div>
      <dl class="mt-8 mb-0">
        <div class="d-flex">
          <dt class="description-list-key">Version:</dt>
          <dd class="description-list-value">0.12.12</dd>
        </div>
      </dl>
    </div>
    <div class="sb-banner-content-left">
      <button class="sb-btn sb-btn-primary sb-btn-normal">Download for Windows (64-bit)&#x200E;</button>
     <i class="sb-banner-close-icon close icon link hide"></i>
    </div>
  </div>
</div>
</div>
      `,
      copyCode: `
      
      `
    }, 
    {
      expandCode: false,
      title: 'Download ***** Lite Desktop App',
      demoCode: `
      <div class="ui stackable grid">
     <div class="one wide column"></div>
     <div class="six wide column pr-8">
    <div class="offline-download-card">
      <h2 class="offline-download-card-heading">Download ***** Lite Desktop App</h2>
      <dl class="mt-16">
          <div class="d-flex">
            <dt class="description-list-key">Version:</dt>
            <dd class="description-list-value">0.12.12</dd>
          </div>
          <div class="d-flex mt-8">
              <dt class="description-list-key">Release Date:</dt>
              <dd class="description-list-value">12/12/19</dd>
            </div>
            <div class="d-flex mt-8">
                <dt class="description-list-key">Supported Languages:</dt>
                <dd class="description-list-value">English, Hindi, Tamil, Bengali</dd>
              </div>
        </dl>
      <div class="offline-download-card-description mt-32">Install ***** desktop app to explore downloaded content or to play content from external devices. ***** Desktop App provides</div>
        <ul class="sb-circular-list mt-32">
            <li class="sb-circular-list-item">Free unlimited content</li>
            <li class="sb-circular-list-item">Multilingual support</li>
            <li class="sb-circular-list-item">Play content offline</li>
          </ul>      
    </div>
  </div>
    <div class="four wide column pl-0">
    <div class="offline-download-card offline-page-content">
        <div class="d-flex flex-ai-center flex-jc-center text-center flex-dc offline-page-content">
            <img src="assets/images/offline-computer.png" alt="download ***** app">
            <button type="button" class="sb-btn sb-btn-primary sb-btn-normal mt-32">Download for Windows (64-bit)&#x200E;</button>
            <div class="offline-download-card-extra mt-16 cursor-pointer">See download instructions</div>
        </div>      
    </div>
  </div>
    <div class="one wide column"></div>
  </div>
      `,
      copyCode: `
      `
    }
  ];

  ngOnInit() {
  }

}
