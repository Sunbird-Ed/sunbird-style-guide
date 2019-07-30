import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-download-manager',
  templateUrl: './offline-download-manager.component.html',
  styleUrls: ['./offline-download-manager.component.scss']
})
export class OfflineDownloadManagerComponent implements OnInit {

  value = '20';
  constructor() { }

  ngOnInit() {
  }

}
