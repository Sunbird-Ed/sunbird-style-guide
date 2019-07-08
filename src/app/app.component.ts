import { Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  constructor(public router : Router){}
  showSidebar = true;
  title = 'docs';
  selectedlink;

  displayMatchedLocationPath(val) {
    this.selectedlink = val;
  }

}