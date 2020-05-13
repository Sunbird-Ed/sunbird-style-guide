import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  sbcards = [
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    },
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',
      type: 'Book'
    }
  ];
  noGroupContent: boolean = true;
  loginContent: boolean = true;
  groupCardContent: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  login(){
    this.noGroupContent = !this.noGroupContent;
    
  }
  onMyGroups(){
    this.loginContent = !this.loginContent;
  }
  onCreateGroup(){
    this.groupCardContent = !this.groupCardContent ;
  }
}
