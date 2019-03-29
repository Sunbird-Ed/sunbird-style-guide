import {
  Component,
  OnInit
} from '@angular/core';
import {
  HighlightResult
} from 'ngx-highlightjs';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent implements OnInit {

  positions;
  selectedPosition = 'top';
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.positions = ['top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right', 'right', 'right top', 'right bottom', 'left', 'left top', 'left bottom'];
  }

  pageTitle = 'Tooltip';
  sections = [{
    expandCode: false,
    title: 'Tooltip',
    demoCode: `
      `,
    copyCode: `
      `
  }];


  ngOnInit() {
  }

}
