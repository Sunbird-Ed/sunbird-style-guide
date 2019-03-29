import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Tabs';
  sections = [
    {
      expandCode: false,
      title: 'Tabular Menu',
      copyCode: `
      <sui-tabset>
      <div class="ui top attached tabular menu">
          <a class="item" suiTabHeader="1">First</a>
          <a class="item" suiTabHeader="2">Second</a>
          <a class="item" suiTabHeader="3">Third</a>
      </div>
      <div class="ui bottom attached segment" suiTabContent="1">First tab!</div>
      <div class="ui bottom attached segment" suiTabContent="2">Second tab!</div>
      <div class="ui bottom attached segment" suiTabContent="3">Third tab!</div>
    </sui-tabset>

      `
    }

  ];
  sections1 = [
    {
      expandCode: false,
      title: 'Pointing Tabs',
      copyCode1: `
      <sui-tabset>
      <div class="ui pointing secondary menu pointing-tab">
          <a class="item" suiTabHeader="1">Nested 1</a>
          <a class="item" suiTabHeader="2">Nested 2</a>
      </div>
      <div class="ui segment" suiTabContent="1">First nested tab!</div>
      <div class="ui segment" suiTabContent="2">Second nested tab!</div>
  </sui-tabset>

      `
    }

  ];
  sections2 = [
    {
      expandCode: false,
      title: 'Secondary Pointing Tabs',
      copyCode1: `
      <sui-tabset>
      <div class="ui pointing secondary menu">
          <a class="item" suiTabHeader="1">Nested 1</a>
          <a class="item" suiTabHeader="2">Nested 2</a>
      </div>
      <div class="ui segment" suiTabContent="1">First nested tab!</div>
      <div class="ui segment" suiTabContent="2">Second nested tab!</div>
  </sui-tabset>

      `
    }

  ];

  ngOnInit() {
  }

}
