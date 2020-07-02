import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-toc',
  templateUrl: './new-toc.component.html',
  styleUrls: ['./new-toc.component.scss']
})
export class NewTocComponent implements OnInit {
  multiSelect1: { name: string; }[];
  showSmallModal = false;
  showJoinModal = false;
  enableProgress = true;
  showMinusbtn = true;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.multiSelect1 = [{name: 'English'}, {name: 'Hindi'}, {name: 'Urdu'}];
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

}
