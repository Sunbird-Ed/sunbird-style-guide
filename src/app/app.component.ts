import { Component, AfterViewInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { steps as defaultSteps, defaultStepOptions} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  showSidebar = true;
  title = 'docs';

  constructor(private shepherdService: ShepherdService) { }

  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = defaultStepOptions;
    this.shepherdService.disableScroll = true;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(defaultSteps);
    this.shepherdService.start();
  }
}
