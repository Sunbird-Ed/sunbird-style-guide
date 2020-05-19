import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  selectStateOption: any[];
  selectState = false;
  states: any [];
  boards: any [];  mediums: any [];  classes: any [];
  districts: any [];
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }
  panelOpened = false;
  showLocationModal;
  showBoardSelectnModal;
  showPastMemberModal;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.selectStateOption = [
      {
        name: 'Andhra Pradesh',
        value: '0'
      },
      {
        name: 'Karnataka',
        value: '1'
      },
      {
        name: 'Tamil Nadu',
        value: '2'
      },
      {
        name: 'Kerala',
        value: '3'
      },
      {
        name: 'Gujarat',
        value: '4'
      },
      {
        name: 'Maharashtra',
        value: '5'
      },
      {
        name: 'UP',
        value: '6'
      }
    ];
    this.states = [  {name: 'Assam'}, {name: 'Andhra Pradesh'}, {name: 'Arunachal Pradesh'},
     {name: 'Bihar'}, {name: 'Chandigarh'}, {name: 'Chattisgarh'}, {name: 'Delhi'}, {name: 'Goa'},
     {name: 'Gujarat'}, {name: 'Harayana'}, {name: 'Himachal Pradesh'}, {name: 'Jammu And Kashmir'},
     {name: 'Jharkhand'}, {name: 'Karnataka'}, {name: 'Kerala'},  {name: 'Maharashtra'}, {name: 'Madhya Pradesh'},
     {name: 'Manipur'}, {name: 'Meghalaya'}, {name: 'Mizoram'}, {name: 'Nagaland'}, {name: 'Orissa'},
     {name: 'Punjab'}, {name: 'Rajasthan'}, {name: 'Sikkim'}, {name: 'Tamil Nadu'}, {name: 'Telangana'},
     {name: 'Tripura'}, {name: 'Uttarakhand'}, {name: 'Uttar Pradesh'}, {name: 'West Bengal'}];
     this.classes = [  {name: 'Class 1'}, {name: 'Class 2'}];
     this.mediums = [  {name: 'Telugu'}, {name: 'English'}];
     this.boards = [  {name: 'Telangana'}, {name: 'Andhra Pradesh'}];
     this.districts = [  {name: 'Assam'}, {name: 'Andhra Pradesh'}, {name: 'Arunachal Pradesh'},
     {name: 'Bihar'}, {name: 'Chandigarh'}, {name: 'Chattisgarh'}, {name: 'Delhi'}, {name: 'Goa'},
     {name: 'Gujarat'}, {name: 'Harayana'}, {name: 'Himachal Pradesh'}, {name: 'Jammu And Kashmir'},
     {name: 'Jharkhand'}, {name: 'Karnataka'}, {name: 'Kerala'},  {name: 'Maharashtra'}, {name: 'Madhya Pradesh'},
     {name: 'Manipur'}, {name: 'Meghalaya'}, {name: 'Mizoram'}, {name: 'Nagaland'}, {name: 'Orissa'},
     {name: 'Punjab'}, {name: 'Rajasthan'}, {name: 'Sikkim'}, {name: 'Tamil Nadu'}, {name: 'Telangana'},
     {name: 'Tripura'}, {name: 'Uttarakhand'}, {name: 'Uttar Pradesh'}, {name: 'West Bengal'}];
  }

}
