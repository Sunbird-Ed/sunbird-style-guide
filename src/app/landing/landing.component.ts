import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  myFunction(event) {
    // tslint:disable-next-line:one-variable-per-declaration
    let filter, ul, li, a, i, j, listHeading;
    filter = event.target.value.toUpperCase();
    ul = document.getElementById('myUL');
    li = ul.getElementsByClassName('sb-site-list-item');
    listHeading = ul.getElementsByClassName('sb-site-list-heading');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
        for (j = 0; j < listHeading.length; j++) {
          listHeading[j].style.display = 'none';
        }
      } else {
        li[i].style.display = 'none';
        for (j = 0; j < listHeading.length; j++) {
          listHeading[j].style.display = 'none';
        }
      }
    }
  }

}
