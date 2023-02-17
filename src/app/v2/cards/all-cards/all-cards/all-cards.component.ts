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

  section = 'section1';

  constructor() { }

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }



  ngOnInit() {
    console.log(this.section + 'abe');
    this.section = localStorage.getItem("storage");
    //this.scrollTo(this.section);
    console.log(this.section);

    // let section = document.querySelectorAll('section');
    // let navLinks = document.querySelectorAll('nav li a');

    // window.onscroll = () => {
    //   section.forEach(sec =>{
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop - 200;
    //     let height = sec.offsetHeight;
    //     let id = sec.getAttribute('id');
    //     alert(id);
    //     if (top >= offset && top < offset + height) {
    //       navLinks.forEach(links => {
    //         links.classList.remove('active');
    //         document.querySelector('nav li a[href*=' +  id + ']').classList.add('active');
    //       })
    //     }
    //   });
    // }

  }

  scrollTo(section) {

    console.log("section", section);
    localStorage.setItem('storage', section);
    this.section = section;

    // console.log(this.section = section);
      document.querySelector('#' + section).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  }
  onSectionChange(sectionId: string) {
    console.log(sectionId);
    this.section = sectionId;
  }




}
