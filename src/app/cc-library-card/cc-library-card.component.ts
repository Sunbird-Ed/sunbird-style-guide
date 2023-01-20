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

  sblibrarycard = `<div class="sb--card" tabindex="0" role="button">
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
          <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="ಹೋಲಿಸುವುದು-NSC4_1A-G1">
          <bdi>ಹೋಲಿಸುವುದು-NSC4_1A-G1</bdi></h4>
          <a role="button" aria-label="View more actions menu" class="menu"tabindex="0"></a>
        </div>
      <div class="sb--card__meta1 text-left">
        <span class="data_1 ellipsis" title="Subject">Subject</span>
        <span class="dot-divider"></span>
        <span class="data_2 ellipsis" title="Grade Level">Grade Level</span>
      </div>
    </div>
  </div>
</div>`;
  sblibrarycardRecentlyViewed = `<div class="sb--card sb--card--recently-viewed" tabindex="0" role="button">`;
  sblibrarycardV2 = `<div class="sb--card sb--card--theme2" role="link" tabindex="0">
  <svg width="79px" class="sb--card-svg-tail" height="36px" viewBox="0 0 79 36" version="1.1"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g class="sb--card-svg-tail__rc" transform="translate(-735.000000, -524.000000)">
        <g transform="translate(517.000000, 338.000000)">
          <g>
            <path
              d="M224.269945,224.907985 C224.269945,224.907985 217.096964,205.264724 219.487958,199.23369 C221.878951,193.203161 229.905965,205.609232 231.442925,210.261729 C231.442925,210.261729 230.930605,187 237.762123,187 C244.59339,187 245.447423,217.498667 245.447423,217.498667 C245.447423,217.498667 247.838417,203.54168 252.27894,203.54168 C256.719214,203.54168 251.424907,219.049331 253.645044,218.704823 C255.865431,218.360315 264.612662,211.290301 270.931859,218.871747 C277.250806,226.453445 274.347493,238.1705 281.17901,237.998119 C288.010277,237.825992 268.503575,211.123125 272.431528,205.95374 C276.359732,200.784607 286.265169,212.84617 287.119203,215.94775 C287.119203,215.94775 286.606883,199.23369 291.218013,199.23369 C295.829393,199.23369 296,223.18494 296,223.18494 L224.269945,224.907985 Z">
            </path>
          </g>
        </g>
      </g>
    </g>
  </svg>
  <div class="sb--card__main-area">
    <!-- card img -->
    <div>
      <div class="img-container">
        <img src="https://staging.sunbirded.org/assets/images/book.png" alt="">
      </div>
    </div>
    <div class="sb--card__svg-area">
      <img src="https://staging.sunbirded.org/assets/images/book.png" alt="">
    </div>
    <div class="sb--card__type">content?.primaryCategory || content?.contentType</div>
  </div>

  <!-- card mobile view details -->
  <div class="sb--card__info">
    <div class="sb--card__meta">
      <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="content?.name">
        <bdi>{{content?.name}}</bdi></h4>
      <a role="button" aria-label="View more actions menu" class="menu"></a>
    </div>
    <div class="sb--card__meta1 text-left">
      <ng-container>
        <span class="data_0 mr-8 organisation" title="content?.organisation">content?.organisation[0]</span>
        <span class="data_0 mr-8" title="content?.organisation">+content?.organisation.length-</span>
      </ng-container>
      <ng-container >
        <span class="data_1 mr-8 medium" title="content?.medium[0]">content?.medium[0]</span>
        <span class="data_1 mr-8" title="content?.medium">+content?.medium.length-1</span>
      </ng-container>
      <ng-container>
        <span class="data_2" title="content?.gradeLevel[0]">content?.gradeLevel[0]</span>
        <span class="data_2" title="content?.gradeLevel">+content?.gradeLevel.length-1</span>
      </ng-container>
    </div>
  </div>
  <!-- content for only desktop -->
  <div class="hide hidden">
    <div class="sb--card__moreinfo">
      <!-- other meta info subject, publisher/organizer etc -->
      <div class="sb--card__meta2 text-left">
        <ng-container>
          <div class="sb--card__meta2_data sb__ellipsis subject">
            <span>Subject: </span> <span title="content?.subject[0]">content?.subject[0]</span> <span class="data_1 mr-8" title="content?.subject"> +content?.subject.length-1
            </span>
          </div>
        </ng-container>
        <ng-container>
          <div class="sb--card__meta2_data sb__ellipsis organisation">
            <span>Publisher: </span> <span title="content?.organisation[0]">content?.organisation[0]</span>
            <span class="data_1 mr-8" title="content?.organisation"> +content?.organisation.length-1</span>
          </div>
        </ng-container>
      </div>
      <!-- other meta info Badge and card category Book, learn, practice -->
      <div class="sb--card__tags">
        <span class="sb--card__badge"><img src="" alt="" title="" /></span>
      </div>
    </div>
    <div class="hide hidden">
      <div>
        <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right">
          <i class="icon-svg icon-svg--xxs icon-videos mr-4">
            <svg class="icon icon-svg--white">
              <use xlink:href="assets/common-consumption/images/sprite.svg#play"></use>
            </svg>
          </i> btnlabel </button>
      </div>
    </div>
  </div>

  <!-- Qr code card -->
  <div class="hide hidden">
    <!-- Section area if not available it will be hidden -->
    <div class="sb--card__moreinfo">
      <div class="sb--card__meta2 text-left">
        <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two">
          <span class="label">moreInfoLabel</span>
          <span class="value">section</span>
        </div>
      </div>
    </div>
  </div>
</div>`;
sblibrarycardV2_css = `.sb--card {
  background-color: var(--cc-sbcard-bg);
}
.sb--card__title {
  color: var(--cc-sbcard-title);
}`;
sblibrarycardV2_vars = `:root {
  --cc-sbcard-bg: var(--white);
  --cc-sbcard-title: var(--primary-color);
  --cc-sblabel-badge-text: #008840;
  --cc-sblabel-badge-br: #008840;
  --cc-sbcard-img-container-bg:#ccc;
  --cc-sbcard-img-label:#000;
}`;
groupcard_basic=`<div class="sb--card" title="group?.name" attr.aria-label="group?.name" 
role="link" tabindex="0">
  <div class="sb--card__main-area">
    <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left ml-16" 
    title="group?.name">group?.name</div>
  </div>
</div>`;
groupcard_initial=`<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
<div class="sb--card__main-area">
  <div class="sb--card__img">
    <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
      <label>AB</label>
    </div>
  </div>
  <div class="sb--card__info">
    <div class="d-flex flex-dr flex-jc-space-between">
      <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
    </div>
  </div>
</div>
</div>`;
groupcard_admin = `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
<div class="sb--card__main-area">
  <div class="sb--card__img">
    <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
      <label>AB</label>
      <div class="img-container--badge">suspend</div>
    </div>
  </div>
  <div class="sb--card__info">
    <div class="d-flex flex-dr flex-jc-space-between">
      <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
      <div class="sb-label-badge mr-8">Admin</div>
    </div>
  </div>
</div>
</div>`;
groupcard_suspended = `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
<div class="sb--card__main-area">
  <div class="sb--card__img">
  <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
      <label>AB</label>
      <div class="img-container--badge">suspend</div>
    </div>
  </div>
  <!-- card title and admin view -->
  <div class="sb--card__info">
    <div class="d-flex flex-dr flex-jc-space-between">
      <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
    </div>
  </div>
</div>
</div>`;
groupcard_web=`<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
<div class="sb--card__main-area">
  <div class="sb--card__img">
    <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
      <label>AB</label>
    </div>
  </div>
  <div class="sb--card__info">
    <div class="d-flex flex-dr flex-jc-space-between">
      <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
      <div class="sb-label-badge mr-8">Admin</div>
    </div>
  </div>
</div>
<div class="sb--card__moreinfo">
  <div class="sb--card__meta2 text-left">
    <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
  </div>
</div>
</div>`;
groupcard_mobile=`<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
<div class="sb--card__main-area">
  <div class="sb--card__img">
    <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
      <label>AB</label>
    </div>
  </div>
  <div class="sb--card__info">
    <div class="d-flex flex-dr flex-jc-space-between">
      <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
      <div class="sb-label-badge mr-8">Admin</div>
    </div>
      <div class="sb--card__meta2 text-left p-0 pt-4">
        <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
      </div>
  </div>
</div>`;

testSnippet= ` import { HighlightJsModule } from 'ngx-highlight-js';`;

  ngOnInit() {}

}
