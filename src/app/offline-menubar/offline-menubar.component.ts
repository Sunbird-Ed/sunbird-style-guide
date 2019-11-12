import { Component, OnInit, Renderer2, Inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline-menubar',
  //encapsulation: ViewEncapsulation.None,
  templateUrl: './offline-menubar.component.html',
  styleUrls: ['./offline-menubar.component.scss']
})
export class OfflineMenubarComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
