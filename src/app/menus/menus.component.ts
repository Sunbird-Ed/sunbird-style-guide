import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
})
export class MenusComponent implements OnInit {

  constructor() { }


  pageTitle = 'Menus';
  sections = [
    {
      expandCode: false,
      title: 'Workspace Sidebar menu',
      demoCode: `
       `,
      copyCode: `
      <div class="ui stackable grid m-0 h-100">
        <div class="two wide column sb-sidebar-menu px-0">
          <h5>My Workspace</h5>
          <ul>
            <li class="active">Create</li>
            <li>All my content</li>
            <li>Course Batches</li>
            <li>Create</li>
          </ul>
        </div>
        <div class="ten wide column sb-sidebar-container">
        </div>
      </div>

      `
    }

  ]
  ngOnInit() {
  }

}
