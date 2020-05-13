import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schooling-home-groups',
  templateUrl: './schooling-home-groups.component.html',
  styleUrls: ['./schooling-home-groups.component.scss']
})
export class SchoolingHomeGroupsComponent implements OnInit {
  dropdownContent: boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  dropdownMenu(){
    this.dropdownContent = !this.dropdownContent;
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }


}
