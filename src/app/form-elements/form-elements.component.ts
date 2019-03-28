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
   ViewForm;
   pageTitle = 'Sample Forms';
   sections = [
     {
       expandCode: false,
       title: 'Form Elements',
     }];

  ngOnInit() {
  }

}
