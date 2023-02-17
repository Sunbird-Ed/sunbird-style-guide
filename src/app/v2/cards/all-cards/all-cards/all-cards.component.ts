import { Component, OnInit } from '@angular/core';
import { cardData } from './all-cards.data';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit {

  pageTitle = "All Cards";
  sections = cardData;

  activeList = 'section1';

  constructor() { }

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }



  ngOnInit() {
    // console.log(this.activeList + 'abe');
    this.activeList = localStorage.getItem("storage");
    //this.scrollTo(this.section);
    // console.log(this.section);

  }

  scrollTo(section) {

    this.activeList = section;
    console.log(section);
    console.log(this.activeList);
    localStorage.setItem('storage', this.activeList);

    // console.log(this.section = section);
      document.querySelector('#' + section).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  }
  onSectionChange(sectionId: string) {
    // console.log(sectionId);
    this.activeList = sectionId;
  }




}
