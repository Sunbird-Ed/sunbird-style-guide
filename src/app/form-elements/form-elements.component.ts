import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {
  grade;
  class;
  medium;
  subject;
  constructor() {
    this.grade = [{name: 'grade1'}, {name: 'grade2'}, {name: 'grade3'}];
    this.class = [{name: 'class1'}, {name: 'class2'}, {name: 'class3'}];
    this.medium = [{name: 'English'}, {name: 'Kannada'}];
    this.subject = [{name: 'English'}, {name: 'Kannada'}];
   }

   pageTitle = 'Form Elements';
   sections = [
     {
       expandCode: false,
       title: 'Form Elements',
       copyCode: `
       <sui-modal [mustScroll]="true" [isClosable]="true" [transitionDuration]="0" [size]="'normal'" class="sb-modal" appBodyScroll
       (dismissed)="showLargeModal = !showLargeModal" #modal>
       <div class="sb-modal-header">
         Modal Heading
       </div>
       <div class="sb-modal-content">
         <div class="ui form">
           <div class="ui grid">
             <div class="twelve wide column">
               <div class="sb-field-group">
                 <label>Full Name</label>
                 <div class="sb-field">
                   <input class="sb-form-control" type="text" placeholder="Enter full name">
                 </div>
               </div>
             </div>
             <div class="six wide column pt-0">
               <label>Grade</label>
               <sui-multi-select class="fluid selection" [options]="options" labelField="name" #multiSelect>
                 <sui-select-option *ngFor="let option of grade" [value]="option">
                 </sui-select-option>
               </sui-multi-select>
             </div>
 
             <div class="six wide column pt-0">
               <label>Class</label>
               <sui-multi-select class="fluid selection" [options]="options" labelField="name" #multiSelect>
                 <sui-select-option *ngFor="let option of class" [value]="option">
                 </sui-select-option>
               </sui-multi-select>
             </div>
             <div class="six wide column pt-0">
               <label>Subject</label>
               <sui-select class="fluid selection" [(ngModel)]="selectedOption" [options]="options" labelField="name" [isSearchable]="searchable"
                 [isDisabled]="disabled" #select>
                 <sui-select-option *ngFor="let option of Subject" [value]="option">
                 </sui-select-option>
               </sui-select>
             </div>
 
             <div class="six wide column pt-0">
               <label>Medium</label>
               <sui-select class="fluid selection" [(ngModel)]="selectedOption" [options]="options" labelField="name" [isSearchable]="searchable"
                 [isDisabled]="disabled" #searchSelect>
                 <sui-select-option *ngFor="let option of medium" [value]="option">
                 </sui-select-option>
               </sui-select>
 
             </div>
 
           </div>
         </div>
       </div>
       <div class="sb-modal-actions">
         <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showLargeModal = !showLargeModal">
           Yes
         </button>
         <button class="sb-btn sb-btn-normal sb-btn-outline-primary" (click)="showLargeModal = !showLargeModal">
           No
         </button>
       </div>
     </sui-modal>
       `
     }]

  ngOnInit() {
  }

}
