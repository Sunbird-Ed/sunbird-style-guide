import { Component, OnInit } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(private router: Router) { }



  pageTitle = "Group Card";
  sections = [
    {
      expandCode: false,
      title: "Basic card",
      url:"https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
      demoCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left ml-16" title="group?.name">group?.name</div>
      </div>
    </div>`,
      copyCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
      <div class="sb--card__main-area">
        <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left ml-16" title="group?.name">group?.name</div>
      </div>
    </div>`,
    copyCode2: `copy code 2`,
    copyCode3: `copy code 3`
    },
    {
      expandCode: false,
      title: "Basic card with Thumbnail/Profile Icon",
      url:"https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/index.html",
      demoCode: ``,
      copyCode: ``
    }
  ];

  tryDemoLink(url: string) {
    window.open(url, "_blank");
  }


  // goToLink(url: string) {
  //   window.open(url, "_blank");
  // }

  // goToPage(url: string) {
  //   window.location.href = url;
  // }

  ngOnInit(): void {
  }

}
