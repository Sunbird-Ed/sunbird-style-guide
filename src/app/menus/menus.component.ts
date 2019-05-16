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
      <div class="ten wide column d-flex sb-sideview-tab-container p-24 pt-72">
        <div class="sb-wspace-card active">
          <div class="sb-wspace-body">
            <div class="sb-wspace-title">Book</div>
            <div class="sb-wspace-description">Build books using resources for an interesting learning experience.</div>
          </div>
        </div>

        <div class="sb-wspace-card">
          <div class="sb-wspace-body">
            <div class="sb-wspace-title">Course</div>
            <div class="sb-wspace-description">Build books using resources for an interesting learning experience.</div>
          </div>
        </div>
      </div>
    </div>

      `
    }

  ]
  ngOnInit() {
  }

}
