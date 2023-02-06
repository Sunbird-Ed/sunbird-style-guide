import { Component, OnInit } from '@angular/core';
import { memberCardData } from './member-card.data';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  constructor() { }

  pageTitle = "member Card";
  sections = memberCardData;

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}