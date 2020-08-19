import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch-component',
  templateUrl: './batch-component.component.html',
  styleUrls: ['./batch-component.component.scss']
})
export class BatchComponentComponent implements OnInit {
  dashBoardItems = [{
    title: "Total Batches",
    count: 24
  },
  {
    title: "Total Enrollment",
    count: 36
  },
  {
    title: "Total complement",
    count: 45
  }
];
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
