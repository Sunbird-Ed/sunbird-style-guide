import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showSidebar = true;
  title = 'docs';
  selectedlink;

  displayMatchedLocationPath(val) {
    this.selectedlink = val;
  }

}
