import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  styles:[`
   
  `],
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {

  //title = 'Angular Search Using ng2-search-filter';
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' }
  ];


  constructor() { 
   
  }

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
          listHeading[j].style.display = 'block';
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


