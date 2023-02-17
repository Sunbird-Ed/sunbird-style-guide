import { Component, OnInit } from '@angular/core';
import { cardData } from './card-one.data';

@Component({
  selector: 'app-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.css']
})
export class CardOneComponent implements OnInit {

  constructor() { }

  pageTitle = "All Cards";
  sections = cardData;

  ngOnInit() {
  }

}
