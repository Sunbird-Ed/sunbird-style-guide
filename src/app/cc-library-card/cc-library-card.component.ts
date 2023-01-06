import { Component, OnInit } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";

@Component({
  selector: "app-cc-library-card",
  templateUrl: "./cc-library-card.component.html",
	styleUrls: [ './cc-library-card.component.scss' ]
})
export class CClibraryCardComponent implements OnInit {
  constructor() {}

  pageTitle = "Library Card";
  sections = [
    {
      expandCode: false,
      title: "Library Card",
      demoCode: `
      <div class="sb--card" tabindex="0" role="button">
      <div class="sb--card__main-area">
        <!-- card img -->
        <div class="sb--card__img">
          <div class="img-container">
            <img src="https://staging.sunbirded.org/assets/images/book.png" alt="">
          </div>
        </div>
        <!-- card mobile view details -->
        <div class="sb--card__info">
            <div class="sb--card__meta1">
              <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="ಹೋಲಿಸುವುದು-NSC4_1A-G1"><bdi>ಹೋಲಿಸುವುದು-NSC4_1A-G1</bdi></h4>
              <a role="button" aria-label="View more actions menu" class="menu"tabindex="0"></a>
            </div>
          <div class="sb--card__meta1 text-left">
            <span class="data_1 ellipsis" title="Subject">Subject</span>
            <span class="dot-divider"></span>
            <span class="data_2 ellipsis" title="Grade Level">Grade Level</span>
          </div>
        </div>
      </div>
    </div>
      `,
      copyCode: `
      <div class="sb--card" tabindex="0" role="button">
      <div class="sb--card__main-area">
        <!-- card img -->
        <div class="sb--card__img">
          <div class="img-container">
            <img src="https://diksha.gov.in/assets/common-consumption/images/abstract_09.svg" alt="">
          </div>
        </div>
        <!-- card mobile view details -->
        <div class="sb--card__info">
            <div class="sb--card__meta1">
              <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="ಹೋಲಿಸುವುದು-NSC4_1A-G1"><bdi>ಹೋಲಿಸುವುದು-NSC4_1A-G1</bdi></h4>
              <a role="button" aria-label="View more actions menu" class="menu"tabindex="0"></a>
            </div>
          <div class="sb--card__meta1 text-left">
            <span class="data_1 ellipsis" title="Subject">Subject</span>
            <span class="dot-divider"></span>
            <span class="data_2 ellipsis" title="Grade Level">Grade Level</span>
          </div>
        </div>
      </div>
    </div>
      `
    }
  ];

  ngOnInit() {}
}
