import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-offline-header',
  //encapsulation: ViewEncapsulation.None,
  templateUrl: './offline-header.component.html',
  styleUrls: ['./offline-header.component.scss']
})
export class OfflineHeaderComponent implements OnInit {

  constructor() { }
  isShown: boolean = true ;
  ngOnInit() {
  }

}
