import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cbse-homepage',
  templateUrl: './cbse-homepage.component.html',
  styleUrls: ['./cbse-homepage.component.scss']
})
export class CbseHomepageComponent implements OnInit {
  multiSelect1: { name: string; }[];
  showLargeModal: boolean;
  searchable: any;
  disabled: any;
  options: any;
  hideLabels: any;
  selectedOptions: any;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
    this.multiSelect1 = [{ name: 'Example' }, { name: 'Test' }, { name: 'that' }];
    this.showLargeModal = true;
  }


  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
