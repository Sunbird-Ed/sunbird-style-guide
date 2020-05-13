import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  sbcards = [
    {
      title: 'Group Name 123',
      subject: 'Social Science',
      class: 'Class 8',
      medium: 'Hindi',
      board: 'CBSE',  
      type: 'Book'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
