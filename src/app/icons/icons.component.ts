import { Component, OnInit } from '@angular/core';
import {
  Ng2IzitoastService
} from 'ng2-izitoast';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  ul: any;
  li: any;
  editIcon = '<span class="sb-icon-edit-user"></span>';
  deleteIcon = '<span class="sb-icon-delete-user"></span>';

  constructor(private iziToast: Ng2IzitoastService) { }

  ngOnInit() {
  }

  iconCopied(event) {
    if (event.isSuccess === true) {
      this.iziToast.show({
        title: 'Icon Copied Successfully',
        class: 'sb-toaster sb-toast-success',
        timeout: 1000,
        position: 'center',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX'
      });
    }
  }

  searchIcon(event) {
    const filter = event.target.value.toLowerCase();
    this.ul = document.getElementById('iconList');
    this.li = this.ul.getElementsByClassName('column');
    for (let i = 0; i < this.li.length; i++) {
      const a = this.li[i].getElementsByTagName('p')[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        this.li[i].style.display = 'block';
      } else {
        this.li[i].style.display = 'none';
      }
    }
  }
}
