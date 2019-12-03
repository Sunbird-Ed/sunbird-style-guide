import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit , OnDestroy {
  multiSelect1: { name: string; }[];

  constructor(@Inject (DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.multiSelect1 = [  {name: 'Assam'}, {name: 'Andhra Pradesh'}, {name: 'Arunachal Pradesh'},
     {name: 'Bihar'}, {name: 'Chandigarh'}, {name: 'Chattisgarh'}, {name: 'Delhi'}, {name: 'Goa'},
     {name: 'Gujarat'}, {name: 'Harayana'}, {name: 'Himachal Pradesh'}, {name: 'Jammu And Kashmir'},
     {name: 'Jharkhand'}, {name: 'Karnataka'}, {name: 'Kerala'},  {name: 'Maharashtra'}, {name: 'Madhya Pradesh'},
     {name: 'Manipur'}, {name: 'Meghalaya'}, {name: 'Mizoram'}, {name: 'Nagaland'}, {name: 'Orissa'},
     {name: 'Punjab'}, {name: 'Rajasthan'}, {name: 'Sikkim'}, {name: 'Tamil Nadu'}, {name: 'Telangana'},
     {name: 'Tripura'}, {name: 'Uttarakhand'}, {name: 'Uttar Pradesh'}, {name: 'West Bengal'}];
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
