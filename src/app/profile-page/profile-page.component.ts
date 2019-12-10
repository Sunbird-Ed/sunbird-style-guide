import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  states: any [];
  districts: any [];
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }
  panelOpened = false;
  showLocationModal;
  showBoardSelectnModal;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.states = [  {name: 'Assam'}, {name: 'Andhra Pradesh'}, {name: 'Arunachal Pradesh'},
     {name: 'Bihar'}, {name: 'Chandigarh'}, {name: 'Chattisgarh'}, {name: 'Delhi'}, {name: 'Goa'},
     {name: 'Gujarat'}, {name: 'Harayana'}, {name: 'Himachal Pradesh'}, {name: 'Jammu And Kashmir'},
     {name: 'Jharkhand'}, {name: 'Karnataka'}, {name: 'Kerala'},  {name: 'Maharashtra'}, {name: 'Madhya Pradesh'},
     {name: 'Manipur'}, {name: 'Meghalaya'}, {name: 'Mizoram'}, {name: 'Nagaland'}, {name: 'Orissa'},
     {name: 'Punjab'}, {name: 'Rajasthan'}, {name: 'Sikkim'}, {name: 'Tamil Nadu'}, {name: 'Telangana'},
     {name: 'Tripura'}, {name: 'Uttarakhand'}, {name: 'Uttar Pradesh'}, {name: 'West Bengal'}];

     this.districts = [  {name: 'Assam'}, {name: 'Andhra Pradesh'}, {name: 'Arunachal Pradesh'},
     {name: 'Bihar'}, {name: 'Chandigarh'}, {name: 'Chattisgarh'}, {name: 'Delhi'}, {name: 'Goa'},
     {name: 'Gujarat'}, {name: 'Harayana'}, {name: 'Himachal Pradesh'}, {name: 'Jammu And Kashmir'},
     {name: 'Jharkhand'}, {name: 'Karnataka'}, {name: 'Kerala'},  {name: 'Maharashtra'}, {name: 'Madhya Pradesh'},
     {name: 'Manipur'}, {name: 'Meghalaya'}, {name: 'Mizoram'}, {name: 'Nagaland'}, {name: 'Orissa'},
     {name: 'Punjab'}, {name: 'Rajasthan'}, {name: 'Sikkim'}, {name: 'Tamil Nadu'}, {name: 'Telangana'},
     {name: 'Tripura'}, {name: 'Uttarakhand'}, {name: 'Uttar Pradesh'}, {name: 'West Bengal'}];
  }

}
