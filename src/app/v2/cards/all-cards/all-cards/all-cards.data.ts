export const cardData = [
  {
    expandCode: false,
    title: "Card style 1",
    url: "https://stackblitz.com/edit/angular-router-basic-example-pogmh9?file=app/cards/card-one/card-one.component.html",
    demoCode: `<div class="sb--card" tabindex="0" role="button">
                  <div class="sb--card__main-area">
                      <!-- card img -->
                      <div class="sb--card__img">
                          <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
                      </div>
                      <!-- card mobile view details -->
                      <div class="sb--card__info">
                          <div class="sb--card__meta1">
                              <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">Card Title</h4>
                              <a aria-label="View more actions" class="menu kabab-menu" role="button" tabindex="0" id="group-actions" (click)="dropdownMenu()">
                                <div class="kabab-menu-dropdown-content">
                                  <div class="d-flex flex-ai-center list p-8 w-100" tabindex="0">
                                    Action1
                                  </div>
                                  <div class="d-flex flex-ai-center list p-8 w-100 fnormal" tabindex="0">
                                    Action2
                                  </div>
                                  <div class="d-flex flex-ai-center list p-8 w-100 fnormal" tabindex="0">
                                    Action3
                                  </div>
                                </div>
                                </a>
                          </div> 
                          <div class="sb--card__meta1 text-left">
                              <span class="data_1 ellipsis" title="meta data1">meta data1</span>
                              <span class="dot-divider"></span>
                              <span class="data_2 ellipsis" title="meta data2">meta data2</span>
                          </div>
                      </div>
                  </div>
                  <div class="sb--card__moreinfo">
                      <div class="sb--card__meta2 text-left">
                          <div class="sb--card__meta2_data">tag: tag name</div>
                          <div class="sb--card__org sb__ellipsis">tag2</div>
                      </div>
                      <div class="sb--card__tags">
                          <span class="sb--card__badge"><img alt="" title=""
                                  src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
                          <span class="sb--card__type">card type</span>
                      </div>
                  </div>
                  <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
              </div>`,
    copyCode: `<div class="sb--card" tabindex="0" role="button">
    <div class="sb--card__main-area">
        <!-- card img -->
        <div class="sb--card__img">
            <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
        </div>
        <!-- card mobile view details -->
        <div class="sb--card__info">
            <div class="sb--card__meta1">
                <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">Card Title</h4>
                <a aria-label="View more actions" class="menu kabab-menu" role="button" tabindex="0" id="group-actions" (click)="dropdownMenu()">
                  <div class="kabab-menu-dropdown-content">
                    <div class="d-flex flex-ai-center list p-8 w-100" tabindex="0">
                      Action1
                    </div>
                    <div class="d-flex flex-ai-center list p-8 w-100 fnormal" tabindex="0">
                      Action2
                    </div>
                    <div class="d-flex flex-ai-center list p-8 w-100 fnormal" tabindex="0">
                      Action3
                    </div>
                  </div>
                  </a>
            </div>  
    
            <div class="sb--card__meta1 text-left">
                <span class="data_1 ellipsis" title="meta data1">meta data1</span>
                <span class="dot-divider"></span>
                <span class="data_2 ellipsis" title="meta data2">meta data2</span>
            </div>
        </div>
    </div>
    <div class="sb--card__moreinfo">
        <div class="sb--card__meta2 text-left">
            <div class="sb--card__meta2_data">tag: tag name</div>
            <div class="sb--card__org sb__ellipsis">tag2</div>
        </div>
        <div class="sb--card__tags">
            <span class="sb--card__badge"><img alt="" title=""
                    src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
            <span class="sb--card__type">card type</span>
        </div>
    </div>
    <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
</div>`,
    copyCSS: `.sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 0.125rem;
      /* recently viewed card css */
      /* offline card css */
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    [dir=ltr] .sb--card__info {
      padding-right: 0.5rem;
    }
    
    [dir=rtl] .sb--card__info {
      padding-left: 0.5rem;
    }
    
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
    }
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 0.75rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 1.25rem;
      margin-top: 0.25rem;
    }
    .sb--card .data_1 {
      max-width: 50%;
    }
    .sb--card .data_2 {
      flex: 1;
    }
    .sb--card .dot-divider {
      width: 0.25rem;
      height: 0.25rem;
      min-width: 0.25rem;
      max-width: 0.25rem;
      min-height: 0.25rem;
      max-height: 0.25rem;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 0.5rem;
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      border-top: 0px solid var(--cc-sbcard-moreinfo-bordertop);
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
      line-height: 0.875rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0.5rem;
    }
    .sb--card__meta2_data .label {
      font-weight: normal;
    }
    .sb--card__meta2_data .value {
      font-weight: bold;
    }
    .sb--card__org {
      color: var(--cc-sbcard-org-text);
    }
    .sb--card__tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
    .sb--card__badge {
      display: flex;
      margin-right: 0.5rem;
    }
    html[dir=rtl] .sb--card__badge {
      margin-right: 0;
      margin-left: 0.5rem;
    }
    .sb--card__badge img {
      width: 1.25rem;
      height: 1.25rem;
    }
    .sb--card__type {
      background: var(--cc-sbcard-type-bg);
      position: relative;
      height: 1.25rem;
      color: var(--cc-sbcard-type-text);
      font-size: 0.6875rem;
      display: flex;
      align-items: center;
      padding: 0 0.5rem 0 0.5rem;
      margin: 0 0 0 0.5rem;
    }
    html[dir=rtl] .sb--card__type {
      margin: 0 0.5rem 0 0rem;
    }
    .sb--card__type::before {
      content: "";
      width: 0;
      height: 0;
      border-width: 0.625rem 0.3125rem;
      border-style: solid;
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
      position: absolute;
      left: -0.625rem;
    }
    html[dir=rtl] .sb--card__type::before {
      right: -0.625rem;
      left: inherit;
      border-color: var(--cc-sbcard-type-br) transparent var(--cc-sbcard-type-br) var(--cc-sbcard-type-br);
    }
    .sb--card--recently-viewed .sb--card__img {
      height: 5.5rem;
      width: 5.5rem;
      flex: 0 0 5.5rem;
      margin: 0;
    }
    .sb--card--recently-viewed .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-rv-img-container-bg);
      height: 5.5rem;
      width: 5.5rem;
      border-radius: 0rem;
    }
    .sb--card--recently-viewed .sb--card__info {
      padding: 0.5rem;
    }
    .sb--card.selected {
      border: 0.063rem solid var(--cc-sbcard-selected-border);
      border-radius: 0.25rem;
      background-color: var(--cc-sbcard-selected-bg);
    }
    .sb--card.offline .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-offline-bg);
      opacity: 0.5;
    }
    .sb--card.offline .sb--card__img .img-container img {
      margin: auto;
      font-size: 1.5rem;
      color: var(--cc-sbcard-offline-img-text);
    }
    .sb--card.offline .sb--card__info,
    .sb--card.offline .sb--card__moreinfo {
      opacity: 0.5;
    }`,
    copyVar: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-dot-divider: var(--gray-200);
      --cc-sbcard-moreinfo-bg: none;
      --cc-sbcard-moreinfo-bordertop: #cacbce;
      --cc-sbcard-meta2-text: var(--gray-800);
      --cc-sbcard-org-text: var(--gray-200);
      --cc-sbcard-type-bg: var(--gray-200);
      --cc-sbcard-type-text: var(--white);
      --cc-sbcard-rv-img-container-bg: var(--gray-100);
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg: rgba(2, 79, 157, 0.2);
      --cc-sbcard-offline-bg: var(--tertiary-color);
      --cc-sbcard-offline-img-text: var(--white);
      --cc-sbcard-type-br: var(--gray-200);
      --cc-sbcard-org-text: var(--balck);
      --cc-sbcard-img-br: var(--white);
      --cc-sbcard-data2-bg: #E5EDF5;
      --cc-sbcard-data2-bg-active: #0076FE;
      --cc-sbcard-data1-bg: #F0E5F5;
      --cc-sbcard-data1-bg-active: #6236FF;
      --cc-sbcard-data0-bg: #E0F5EA;
      --cc-sbcard-data0-bg-active: #008840;
      --cc-sbcard-data1-2-text: var(--primary-color);
  }`
  },
  {
    expandCode: false,
    title: "Card style 2",
    url: "https://stackblitz.com/edit/angular-router-basic-example-pogmh9?file=app/cards/card-two/card-two.component.html",
    demoCode: `<div class="sb--card sb--card--theme2" role="link" tabindex="0">
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
      <div class="sb--card__img sb--card__image-pos">
        <div class="img-container">
          <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
        </div>
      </div>
      <div class="sb--card__svg-area">
        <img src="/assets/images/abstract_02.svg" alt=""/>
      </div>
      <div class="sb--card__type">Card type</div>
    </div>
  
    <!-- card mobile view details -->
    <div class="sb--card__info">
      <div class="sb--card__meta">
        <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="">
          Card Title</h4>
      </div>
      <div class="sb--card__meta1 text-left">
          <span class="data_0 mr-8 organisation" title="">meta 1</span>
          <span class="data_0 mr-8" title="">+11</span>
  
          <span class="data_1 mr-8 medium" title="">meta 2</span>
          <span class="data_1 mr-8" title="">+3</span>
  
          <span class="data_2" title="">meta 3</span>
          <span class="data_2" title="">+4</span>
      </div>
    </div>
    <!-- content for only desktop -->
    <div>
      <div class="sb--card__moreinfo">
        <!-- other meta info subject, publisher/organizer etc -->
        <div class="sb--card__meta2 text-left">
            <div class="sb--card__meta2_data sb__ellipsis subject">
              <span>Meta: </span> <span title="">value</span> <span class="data_1 mr-8" title=""> +5
              </span>
            </div>
            <div class="sb--card__meta2_data sb__ellipsis organisation">
              <span>meta2: </span> <span title="">value2</span>
              <span class="data_1 mr-8" title=""> +6
              </span>
            </div>
  
        </div>
        <!-- other meta info Badge and card category Book, learn, practice -->
        <div class="sb--card__tags">
          <span class="sb--card__badge"><img
              src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
          <!-- <span class="sb--card__type" *ngIf="content?.contentType">content type</span> -->
        </div>
      </div>
    </div>
        <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
  </div>
  `,
    copyCode: `<div class="sb--card sb--card--theme2" role="link" tabindex="0">
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
      <div class="sb--card__img sb--card__image-pos">
        <div class="img-container">
          <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
        </div>
      </div>
      <div class="sb--card__svg-area">
        <img src="/assets/images/abstract_02.svg" alt=""/>
      </div>
      <div class="sb--card__type">Card type</div>
    </div>
  
    <!-- card mobile view details -->
    <div class="sb--card__info">
      <div class="sb--card__meta">
        <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="">
          Card Title</h4>
      </div>
      <div class="sb--card__meta1 text-left">
          <span class="data_0 mr-8 organisation" title="">meta 1</span>
          <span class="data_0 mr-8" title="">+11</span>
  
          <span class="data_1 mr-8 medium" title="">meta 2</span>
          <span class="data_1 mr-8" title="">+3</span>
  
          <span class="data_2" title="">meta 3</span>
          <span class="data_2" title="">+4</span>
      </div>
    </div>
    <!-- content for only desktop -->
    <div>
      <div class="sb--card__moreinfo">
        <!-- other meta info subject, publisher/organizer etc -->
        <div class="sb--card__meta2 text-left">
            <div class="sb--card__meta2_data sb__ellipsis subject">
              <span>Meta: </span> <span title="">value</span> <span class="data_1 mr-8" title=""> +5
              </span>
            </div>
            <div class="sb--card__meta2_data sb__ellipsis organisation">
              <span>meta2: </span> <span title="">value2</span>
              <span class="data_1 mr-8" title=""> +6
              </span>
            </div>
  
        </div>
        <!-- other meta info Badge and card category Book, learn, practice -->
        <div class="sb--card__tags">
          <span class="sb--card__badge"><img
              src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
          <!-- <span class="sb--card__type" *ngIf="content?.contentType">content type</span> -->
        </div>
      </div>
    </div>
        <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
  </div>`,
    copyCSS: `.sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 0.125rem;
      /* recently viewed card css */
      /* offline card css */
    }
    .sb--card:hover {
      transform: translate(0, 0px);
      box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
    }
    @media (max-width: 767px) {
      .sb--card {
        box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
      }
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    [dir=ltr] .sb--card__info {
      padding-right: 0.5rem;
    }
    
    [dir=rtl] .sb--card__info {
      padding-left: 0.5rem;
    }
    
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
    }
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 0.75rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 1.25rem;
      margin-top: 0.25rem;
    }
    .sb--card .data_1 {
      max-width: 50%;
    }
    .sb--card .data_2 {
      flex: 1;
    }
    .sb--card .dot-divider {
      width: 0.25rem;
      height: 0.25rem;
      min-width: 0.25rem;
      max-width: 0.25rem;
      min-height: 0.25rem;
      max-height: 0.25rem;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 0.5rem;
    }
    .sb--card__moreinfo {
      border-radius: 0 0 0.125rem 0.125rem;
      background-color: var(--cc-sbcard-moreinfo-bg);
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      border-top: 0px solid var(--cc-sbcard-moreinfo-bordertop);
    }
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 0.75rem;
      line-height: 0.875rem;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0.5rem;
    }
    .sb--card__meta2_data .label {
      font-weight: normal;
    }
    .sb--card__meta2_data .value {
      font-weight: bold;
    }
    .sb--card__org {
      color: var(--cc-sbcard-org-text);
    }
    .sb--card__tags {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
    .sb--card__badge {
      display: flex;
      margin-right: 0.5rem;
    }
    html[dir=rtl] .sb--card__badge {
      margin-right: 0;
      margin-left: 0.5rem;
    }
    .sb--card__badge img {
      width: 1.25rem;
      height: 1.25rem;
    }
    .sb--card__type {
      background: var(--cc-sbcard-type-bg);
      position: relative;
      height: 1.25rem;
      color: var(--cc-sbcard-type-text);
      font-size: 0.6875rem;
      display: flex;
      align-items: center;
      padding: 0 0.5rem 0 0.5rem;
      margin: 0 0 0 0.5rem;
    }
    html[dir=rtl] .sb--card__type {
      margin: 0 0.5rem 0 0rem;
    }
    .sb--card__type::before {
      content: "";
      width: 0;
      height: 0;
      border-width: 0.625rem 0.3125rem;
      border-style: solid;
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
      position: absolute;
      left: -0.625rem;
    }
    html[dir=rtl] .sb--card__type::before {
      right: -0.625rem;
      left: inherit;
      border-color: var(--cc-sbcard-type-br) transparent var(--cc-sbcard-type-br) var(--cc-sbcard-type-br);
    }
    .sb--card--recently-viewed .sb--card__img {
      height: 5.5rem;
      width: 5.5rem;
      flex: 0 0 5.5rem;
      margin: 0;
    }
    .sb--card--recently-viewed .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-rv-img-container-bg);
      height: 5.5rem;
      width: 5.5rem;
      border-radius: 0rem;
    }
    .sb--card--recently-viewed .sb--card__info {
      padding: 0.5rem;
    }
    .sb--card.selected {
      border: 0.063rem solid var(--cc-sbcard-selected-border);
      border-radius: 0.25rem;
      background-color: var(--cc-sbcard-selected-bg);
    }
    .sb--card.offline .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-offline-bg);
      opacity: 0.5;
    }
    .sb--card.offline .sb--card__img .img-container img {
      margin: auto;
      font-size: 1.5rem;
      color: var(--cc-sbcard-offline-img-text);
    }
    .sb--card.offline .sb--card__info,
    .sb--card.offline .sb--card__moreinfo {
      opacity: 0.5;
    }
    
    /*End sb card component css */
    
    ::ng-deep .card-hover {
      opacity: 0;
      transition: all 0.2s ease-in;
      display: none;
    }
    ::ng-deep .sb--card:hover .card-hover,
    ::ng-deep .sb--card:focus-within .card-hover {
      opacity: 1;
      z-index: 1001;
      display: block;
    }
    ::ng-deep .sb--card:hover .card-hover .child-content,
    ::ng-deep .sb--card:focus-within .card-hover .child-content {
      --cc-sbcard-hover-text: var(--white);
      --cc-sbcard-hover-bg: var(--primary-color);
      color: var(--cc-sbcard-hover-text);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.95;
      border-radius: 0.125rem;
      background-color: var(--cc-sbcard-hover-bg);
      z-index: 1;
      display: flex;
      align-items: center;
      transition: 0.2s ease-in;
      flex-direction: column;
      justify-content: space-evenly;
    }
    
    a.menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--gray-200);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.375rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
    a.menu:hover {
      text-decoration: none;
    }
    a.menu:hover::after {
      background: var(--gray-0);
    }
    
    
    
    /* library card default */
    .sb--card__img .img-container {
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
      width: auto;
      height: auto;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      overflow: hidden;
      object-fit: cover;
    }
    .sb--card__org {
      color: var(--balck) !important;
    }
    .sb--card__image-pos {
      position: absolute;
      top: 50%;
      z-index: 1000;
    }
    html[dir=rtl] .sb--card__image-pos {
      left: 1rem;
      right: inherit;
    }
    .sb--card .border-top-r-left-right {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    
.sb--card.sb--card--theme2 {
  box-shadow: var(--sbt-box-shadow-6px);
  border-radius: 1.5rem;
  overflow: hidden;
}
.sb--card.sb--card--theme2 .sb--card-svg-tail {
  position: absolute;
  bottom: 0px;
  right: 1.5rem;
}
html[dir=rtl] .sb--card.sb--card--theme2 .sb--card-svg-tail {
  left: 1.5rem;
  right: inherit;
}
.sb--card.sb--card--theme2 .sb--card-svg-tail__rc {
  fill: transparent;
  stroke: var(--primary-color);
}
.sb--card.sb--card--theme2 .sb--card__svg-area {
  height: 4.5rem;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
}
.sb--card.sb--card--theme2 .sb--card__svg-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sb--card.sb--card--theme2 .sb--card__main-area {
  height: auto;
  position: relative;
}
.sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type {
  position: absolute;
  background: var(--black);
  text-transform: uppercase;
  margin-left: -0.5rem;
  padding-left: 0.5rem;
}
html[dir=rtl] .sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type {
  margin-right: -0.5rem;
  padding-right: 0.5rem;
  margin-left: 0rem;
}
.sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type::before {
  border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
  position: absolute;
  right: -0.6rem;
  transform: rotatey(-180deg);
  left: inherit;
}
html[dir=rtl] .sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type::before {
  left: -0.5rem;
  transform: rotatex(180deg);
  right: inherit;
}
.sb--card.sb--card--theme2 .sb--card__info {
  padding: 0rem 0.5rem;
}
.sb--card.sb--card--theme2 .sb--card__title {
  margin-right: 5.5rem;
}
html[dir=rtl] .sb--card.sb--card--theme2 .sb--card__title {
  margin-left: 5.5rem;
  margin-right: 0px;
}
.sb--card.sb--card--theme2 .sb--card__meta {
  height: 2.5rem;
  display: flex;
  align-items: center;
}
.sb--card.sb--card--theme2 .sb--card__meta1 {
  height: 3.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}
.sb--card.sb--card--theme2 .sb--card__meta2 {
  padding: 0.5rem 1rem;
}
.sb--card.sb--card--theme2 .sb--card__image-pos {
  margin: 0;
  overflow: inherit;
}
.sb--card.sb--card--theme2 .sb--card__image-pos .img-container {
  box-shadow: 0 0 0.313rem 0 rgba(var(--rc-rgba-black), 0.1);
}

/* sb card component css */
.sb--card.sb--card--theme2 .sb--card__img .img-container {
  border: 0.25rem solid var(--cc-sbcard-img-br);
  border-radius: 4.5rem;
}
.sb--card.sb--card--theme2 .sb--card__img .img-container img {
  min-height: 100%;
}
.sb--card.sb--card--theme2 .sb--card__image-pos {
  right: 1rem;
}
.sb--card.sb--card--theme2 .sb--card__main-area {
  margin: 0.5rem 0.5rem 0.5rem;
}
.sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type:before {
  --cc-sbcard-type-br: var(--black);
}
.sb--card.sb--card--theme2 .sb--card__meta1 .data_1,
.sb--card.sb--card--theme2 .sb--card__meta1 .data_2, .sb--card.sb--card--theme2 .sb--card__meta1 .data_0 {
  border-radius: 0.5rem;
  font-size: 0.75rem;
  padding: 0px 0.5rem;
  width: auto;
  flex: initial;
  margin: 0px 0.5rem 0.5rem 0px;
  white-space: nowrap;
}
.sb--card.sb--card--theme2 .sb--card__meta1 .data_0 {
  background: var(--cc-sbcard-data0-bg);
  color: var(--cc-sbcard-data0-bg-active);
}
.sb--card.sb--card--theme2 .sb--card__meta1 .data_1 {
  background: var(--cc-sbcard-data1-bg);
  color: var(--cc-sbcard-data1-bg-active);
}
.sb--card.sb--card--theme2 .sb--card__meta1 .data_2 {
  background: var(--cc-sbcard-data2-bg);
  color: var(--cc-sbcard-data2-bg-active);
}
.sb--card.sb--card--theme2 .sb--card__meta1 .data_2:last-child {
  margin-right: 0px;
}
    `,
    copyVar: `:root {
    --cc-sbcard-bg: var(--white);
    --cc-sbcard-title: var(--primary-color);
    --cc-sbcard-meta-text: var(--gray-800);
    --cc-sbcard-moreinfo-bg: none;
    --cc-sbcard-moreinfo-bordertop: #cacbce;
    --cc-sbcard-meta2-text: var(--gray-800);
    --cc-sbcard-type-bg: var(--gray-200);
    --cc-sbcard-type-text: var(--white);
    --cc-sbcard-img-br: var(--white);
    --cc-sbcard-org-text: var(--balck);
    --cc-sbcard-data2-bg: #E5EDF5;
    --cc-sbcard-data2-bg-active: #0076FE;
    --cc-sbcard-data1-bg: #F0E5F5;
    --cc-sbcard-data1-bg-active: #6236FF;
    --cc-sbcard-data0-bg: #E0F5EA;
    --cc-sbcard-data0-bg-active: #008840;
    --cc-sbcard-data1-2-text: var(--primary-color);
  }`
  },
  {
    expandCode: false,
    title: "Card style 3",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 sb--card--v3" role="link" tabindex="0">
  <div class="sb--card__main-area">
      <!-- card img -->
      <div class="sb--card__img sb--card__image-pos">
          <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
          </div>
      </div>
      <!-- card mobile view details -->
      <div class="sb--card__info">
          <div class="data_3 ellipsis">TAGNAME</div>
          <div class="sb--card__meta1">
              <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="">
                  Content Name
              </h4>
          </div>
          <div class="sb--card__details sb__ellipsis sb__ellipsis--two">
              <span title="">Content Subject</span>
          </div>
          <div class="sb--card__meta1 text-left">
              <div class="truncated-ellipsis-container">
                  <span> Medium <span class="dot-divider"></span></span><span>Grade Level</span>
              </div>
          </div>
      </div>
  </div>
</div>`,
    copyCode: `<div class="sb--card sb--card--theme2 sb--card--v3" role="link" tabindex="0">
  <div class="sb--card__main-area">
      <!-- card img -->
      <div class="sb--card__img sb--card__image-pos">
          <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
          </div>
      </div>
      <!-- card mobile view details -->
      <div class="sb--card__info">
          <div class="data_3 ellipsis">TAGNAME</div>
          <div class="sb--card__meta1">
              <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="">
                  Content Name
              </h4>
          </div>
          <div class="sb--card__details sb__ellipsis sb__ellipsis--two">
              <span title="">Content Subject</span>
          </div>
          <div class="sb--card__meta1 text-left">
              <div class="truncated-ellipsis-container">
                  <span> Medium <span class="dot-divider"></span></span><span>Grade Level</span>
              </div>
          </div>
      </div>
  </div>
</div>`,
    copyCSS: `  .sb--card.sb--card--theme2.sb--card--v3 {
    border-radius: calculateRem(8px);
    padding: 1rem;

    .sb--card__image-pos {
      position: initial;
    }

    .sb--card__main-area {
      flex-direction: row-reverse;
      align-items: flex-start;
      margin: 0;

      .sb--card__type {
        font-size: 1.125rem;
      }
    }

    .sb--card__img {
      width: 3.5rem;
      flex: 0 0 3.5rem;
      margin: 0rem;
    }

    .sb--card__image-pos {
      .img-container {
        height: calculateRem(72px);
      }
    }

    .sb--card__img .img-container {
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 3.5rem;
      justify-content: center;
      border: none;

      img {
        max-width: 100%;
        width: auto;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        -o-object-fit: contain;
        object-fit: contain;
      }
    }

    .sb--card__info {
      padding: 0rem calculateRem(8px) 0 calculateRem(0px);
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .data_3 {
        border-radius: calculateRem(4px);
        background-color: #FFE99E;
        font-size: 0.90rem;
        text-transform: uppercase;
        padding: 2px;
        margin-bottom: 0.25rem;
      }

      .data_4 {
        font-size: 0.9rem;
        margin: 0.125rem 0;
      }
    }

    .sb--card__title {
      color: unset;
      font-size: calculateRem(18px);
      font-weight: bold;
      margin-bottom: 0.25rem;

    }

    .sb--card__meta1 {
      margin-top: 0px;
      width: 100%;

      .data_1,
      .data_2 {
        color: var(--cc-sbcard-data1-2-text);
        border-radius: calculateRem(8px);
        font-size: calculateRem(12px);
        width: auto;
        flex: initial;
        white-space: nowrap;
      }

      .data_2 {
        &:last-child {
          margin-right: 0px;
        }
      }

      .truncated-ellipsis-container {
        color: var(--cc-sbcard-data1-2-text);
      }
    }

    .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--gray-200);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.375rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
  }`,
    copyVar: `:root {
    --cc-sbcard-bg: var(--white);
    --cc-sbcard-img-container-bg: var(--gray-100);
    --cc-sbcard-title: var(--primary-color);
    --cc-sbcard-meta-text: var(--gray-800);
    --cc-sbcard-dot-divider: var(--gray-200);
    --cc-sbcard-img-br: var(--white);
    --cc-sbcard-data1-2-text: var(--primary-color);
  }`
  },
  {
    expandCode: false,
    title: "Card style 4",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 sb--card--v4" tabindex="0">
  <div class="sb--card__main-area">
    <!-- card img -->
    <div class="sb--card__img sb--card__image-pos">
      <div class="img-container">
        <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
      </div>
    </div>
    <!-- card type -->
    <div class="sb--card__type">Content Type</div>
  </div>

  <!-- card mobile view details -->
  <div class="sb--card__info">
    <div class="sb--card__meta">
      <div class="sb__ellipsis sb__ellipsis--two text-left flex-basis-1 title-info" title="">Content Name</div>
    </div>
    <div class="subject-info">
      Subject :
      <div class="truncated-ellipsis-container"><span> telugu... +2</span></div>

    </div>
    <div class="sb--card__meta1 text-left">
      <span class="data_1 mr-8" title="">
        <div class="truncated-ellipsis-container">
          <span> se_boards</span>
        </div>
      </span>
      <span class="data_2" title="">
        <div class="truncated-ellipsis-container">
          <span> se_mediums</span>
        </div>
      </span>
      <span class="data_3" title="">
        <div class="truncated-ellipsis-container">
          <span> se_gradeLevels</span>
        </div>
      </span>
    </div>
    <div class="subject-info text-info">Published by : Content Creator</div>
  </div>`,
    copyCode: `<div class="sb--card sb--card--theme2" tabindex="0">
  <div class="sb--card__main-area">
    <!-- card img -->
    <div class="sb--card__img sb--card__image-pos">
      <div class="img-container">
        <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
      </div>
    </div>
    <!-- card type -->
    <div class="sb--card__type">Content Type</div>
  </div>

  <!-- card mobile view details -->
  <div class="sb--card__info">
    <div class="sb--card__meta">
      <div class="sb__ellipsis sb__ellipsis--two text-left flex-basis-1 title-info" title="">Content Name</div>
    </div>
    <div class="subject-info">
      Subject :
      <div class="truncated-ellipsis-container"><span> telugu... +2</span></div>

    </div>
    <div class="sb--card__meta1 text-left">
      <span class="data_1 mr-8" title="">
        <div class="truncated-ellipsis-container">
          <span> se_boards</span>
        </div>
      </span>
      <span class="data_2" title="">
        <div class="truncated-ellipsis-container">
          <span> se_mediums</span>
        </div>
      </span>
      <span class="data_3" title="">
        <div class="truncated-ellipsis-container">
          <span> se_gradeLevels</span>
        </div>
      </span>
    </div>
    <div class="subject-info text-info">Published by : Content Creator</div>
  </div>`,
    copyCode2: `  .sb--card.sb--card--theme2 {
    border-radius: calculateRem(24px);
    box-shadow: calculateRem(5px) calculateRem(5px) calculateRem(2px) 0 rgba(0, 0, 0, 0.1) !important;

    &__image-pos {
      top: 0px;
      right: calculateRem(16px);
    }


    &.title-info {
      font-size: calculateRem(16px);
      letter-spacing: 0;
      line-height: calculateRem(20px);
      font-weight: bold;
    }

    .subject-info {
      height: auto;
      width: auto;
      color: var(--gray-800);
      font-size: calculateRem(13px);
      letter-spacing: 0;
      line-height: calculateRem(20px);
      margin-top: calculateRem(10px);
      display: flex;
      align-items: center;
    }

    &.text-info {
      padding: 0px calculateRem(5px) calculateRem(16px) 0;
      margin-top: calculateRem(5px);
    }

    .sb--card__main-area {
      margin: calculateRem(16px) 0 calculateRem(8px);

      .sb--card__type {
        margin-top: calculateRem(16px);
        height: 1.4rem;
        width: auto;
        color: var(--white);
        font-size: calculateRem(11px);
        letter-spacing: 0;
        line-height: calculateRem(20px);
        text-align: center;
        padding-left: calculateRem(10px);
        margin-left: 0px;
        text-transform: uppercase;
        background-color: var(--black);

        &::before {
          border-color: var(--black) var(--black) var(--black) transparent;
          height: 1.4rem;
        }
      }
    }

    .sb--card__img {
      height: calculateRem(84px);
      width: calculateRem(64px);
      overflow: hidden;
      flex: 0 0 3.5rem;
      margin: 0rem;
    }

    .sb--card__img .img-container {
      width: 4rem;
      border-radius: 0.5rem;
      img {
        min-height: 100%;
      }
    }

    .sb--card__meta {
      width: 60vw;
      color: var(--gray-800);
      font-size: calculateRem(16px);
      letter-spacing: 0;
      line-height: calculateRem(20px);
    }

    .sb--card__info {
      padding-top: 0.5rem;
    }

    .sb--card__meta1 {
      height: auto;
      flex-wrap: wrap;
      margin-top: calculateRem(10px);

      .data_1,
      .data_2,
      .data_3 {
        border-radius: calculateRem(8px);
        font-size: calculateRem(12px);
        padding: 0px calculateRem(10px) 0px calculateRem(10px);
        width: auto;
        flex: initial;
        margin: 0px calculateRem(8px) calculateRem(8px) 0px;
        white-space: nowrap;
        letter-spacing: 0;
        line-height: calculateRem(22px);
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 32ch
      }

      .data_1 {
        background: #E0F5EA;
        color: #008840;
        width: auto;
      }

      .data_2 {
        background: #F0E5F5;
        color: #6236FF;

        &:last-child {
          margin-right: 0px;
        }
      }

      .data_3 {
        color: #788594;
        background: #E5EDF5;
      }
    }

    .sb--card__image-pos {
      .img-container {
        height: calculateRem(84px);
      }
    }

  }`,
    copyCode3: `:root {
    --cc-sbcard-bg: var(--white);
    --cc-sbcard-img-container-bg: var(--gray-100);
    --cc-sbcard-img-br: var(--white);
    --cc-sbcard-type-bg: var(--gray-200);
    --cc-sbcard-type-text: var(--white);
  }`
  },
  // {
  //   expandCode: false,
  //   title: "Card style 5",
  //   description: "",
  //   url: "https://stackblitz.com/edit/bootstrap-5-gdbtdz?file=src/component2.html",
  //   demoCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
  //       <div class="sb--card__main-area">
  //         <div class="sb--card__img">
  //           <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
  //             <label>AB</label>
  //           </div>
  //         </div>
  //         <div class="sb--card__info">
  //           <div class="d-flex flex-dr flex-jc-space-between">
  //             <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
  //             <div class="sb-label-badge">Admin</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="sb--card__moreinfo">
  //         <div class="sb--card__meta2 text-left">
  //           <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
  //         </div>
  //       </div>
  //       </div>`,
  //   copyCode: `<div class="sb--card" title="group?.name" attr.aria-label="group?.name" role="link" tabindex="0">
  //       <div class="sb--card__main-area">
  //         <div class="sb--card__img">
  //           <div class="img-container img-container--label" style="background-color: rgb(179, 235, 215)">
  //             <label>AB</label>
  //           </div>
  //         </div>
  //         <div class="sb--card__info">
  //           <div class="d-flex flex-dr flex-jc-space-between">
  //             <div class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="group?.name">group?.name</div>
  //             <div class="sb-label-badge">Admin</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="sb--card__moreinfo">
  //         <div class="sb--card__meta2 text-left">
  //           <div class="sb--card__meta2_data sb__ellipsis sb__ellipsis--two" title="group?.description">group?.description</div>
  //         </div>
  //       </div>
  //       </div>`,
  //   copyCSS: `.sb--card {
  //       width: 100%;
  //       background-color: var(--cc-sbcard-bg);
  //       display: flex;
  //       flex-direction: column;
  //       cursor: pointer;
  //       position: relative;
  //       margin-top: 0px;
  //       border: 0px;
  //       contain: content;
  //       border-radius: 0.125rem;
  //     }
  //     .sb--card:hover {
  //       transform: translate(0, 0px);
  //       box-shadow: 0 0.125rem 0.4375rem 0 rgba(var(--rc-rgba-black), 0.16);
  //     }
  //     @media (max-width: 767px) {
  //       .sb--card {
  //         box-shadow: 0 0.125rem 0.4375rem rgba(var(--rc-rgba-black), 0.16);
  //       }
  //     }
  //     .sb--card__main-area {
  //       display: flex;
  //       flex-direction: row;
  //       align-items: center;
  //       height: 5.5rem;
  //     }
  //     .sb--card__title {
  //         color: var(--cc-sbcard-title);
  //         font-size: 0.875rem;
  //         margin: 0px;
  //         line-height: normal;
  //       }
  //     .sb--card__img {
  //       height: 4.5rem;
  //       width: 4.5rem;
  //       overflow: hidden;
  //       flex: 0 0 4.5rem;
  //       margin: 0.5rem;
  //     }
  //     .sb--card__img .img-container {
  //       display: flex;
  //       align-items: center;
  //       background-color: var(--cc-sbcard-img-container-bg);
  //       height: 4.5rem;
  //       width: 4.5rem;
  //       justify-content: center;
  //     }
  //     .sb--card__img .img-container img {
  //       max-width: 100%;
  //     }
  //     .sb--card__info {
  //       flex: 1;
  //       overflow: hidden;
  //     }
  //     [dir=ltr] .sb--card__info {
  //       padding-right: 0.5rem;
  //     }
      
  //     [dir=rtl] .sb--card__info {
  //       padding-left: 0.5rem;
  //     }
  //     .sb--card__meta1 {
  //       color: var(--cc-sbcard-meta-text);
  //       font-size: 0.75rem;
  //       display: flex;
  //       flex-direction: row;
  //       align-items: center;
  //       flex: 1;
  //       line-height: 1.25rem;
  //       margin-top: 0.25rem;
  //     }
  //     .sb--card .data_1 {
  //       max-width: 50%;
  //     }
  //     .sb--card .data_2 {
  //       flex: 1;
  //     }
  //     .sb--card .dot-divider {
  //       width: 0.25rem;
  //       height: 0.25rem;
  //       min-width: 0.25rem;
  //       max-width: 0.25rem;
  //       min-height: 0.25rem;
  //       max-height: 0.25rem;
  //       border-radius: 100%;
  //       background-color: var(--cc-sbcard-dot-divider);
  //       display: inline-block;
  //       margin: 0px 0.5rem;
  //     }
  //     .sb--card__moreinfo {
  //       border-radius: 0 0 0.125rem 0.125rem;
  //       background-color: var(--cc-sbcard-moreinfo-bg);
  //       display: flex;
  //       flex-direction: row;
  //       align-items: stretch;
  //       justify-content: space-between;
  //       border-top: 0px solid var(--cc-sbcard-moreinfo-bordertop);
  //     }
  //     .sb--card__meta2 {
  //       color: var(--cc-sbcard-meta2-text);
  //       font-size: 0.75rem;
  //       line-height: 0.875rem;
  //       display: flex;
  //       flex-direction: column;
  //       flex-wrap: wrap;
  //       justify-content: space-around;
  //       padding: 0.5rem;
  //     }
  //     .sb--card__meta2_data .label {
  //       font-weight: normal;
  //     }
  //     .sb--card__meta2_data .value {
  //       font-weight: bold;
  //     }
  //     .sb--card__org {
  //       color: var(--cc-sbcard-org-text);
  //     }
  //     .sb--card__tags {
  //       display: flex;
  //       flex-direction: row;
  //       align-items: center;
  //       justify-content: flex-end;
  //       flex: 1;
  //     }
  //     .sb--card__badge {
  //       display: flex;
  //       margin-right: 0.5rem;
  //     }
  //     html[dir=rtl] .sb--card__badge {
  //       margin-right: 0;
  //       margin-left: 0.5rem;
  //     .sb--card__badge img {
  //       width: 1.25rem;
  //       height: 1.25rem;
  //     }
    
  //     .sb--card:hover .card-hover,
  //     .sb--card:focus-within .card-hover {
  //       opacity: 1;
  //       z-index: 1001;
  //       display: block;
  //     }
  //     .sb--card:hover .card-hover .child-content,
  //     .sb--card:focus-within .card-hover .child-content {
  //       --cc-sbcard-hover-text: var(--white);
  //       --cc-sbcard-hover-bg: var(--primary-color);
  //       color: var(--cc-sbcard-hover-text);
  //       position: absolute;
  //       left: 0;
  //       right: 0;
  //       top: 0;
  //       bottom: 0;
  //       opacity: 0.95;
  //       border-radius: 0.125rem;
  //       background-color: var(--cc-sbcard-hover-bg);
  //       z-index: 1;
  //       display: flex;
  //       align-items: center;
  //       transition: 0.2s ease-in;
  //       flex-direction: column;
  //       justify-content: space-evenly;
  //     }
      
  //     /* group card */
  //     .sb--card__img .img-container--label {
  //       text-transform: capitalize;
  //       background-color: var(--cc-sbcard-img-label-bg);
  //       color: var(--cc-sbcard-img-label);
  //       position: relative;
  //     }
  //     .sb--card__img .img-container--label label {
  //       margin-bottom: 0px;
  //       padding-bottom: 0px;
  //       font-size: 1.3125rem;
  //       font-weight: bold;
  //     }
  //     .sb--card__img .img-container--label .img-container--badge {
  //       position: absolute;
  //       bottom: 0;
  //       width: 100%;
  //       background-color: var(--cc-sbcard-img-badge-bg);
  //       color: var(--cc-sbcard-img-badge-text);
  //       font-size: 0.75rem;
  //       text-align: center;
  //       margin-bottom: 0.5rem;
  //       line-height: normal;
  //       opacity: 0.6;
  //     }
      
  //     .sb-label-badge {
  //       font-size: 0.6875rem;
  //       border: 1px solid var(--cc-sblabel-badge-br);
  //       align-self: center;
  //       padding: 0.25rem 0.5rem;
  //       border-radius: 0.125rem;
  //       color: var(--cc-sblabel-badge-text);
  //       text-align: center;
  //     }`,
  //   copyVar: `:root {
  //       --cc-sbcard-bg: var(--white);
  //       --cc-sbcard-img-container-bg: var(--gray-100);
  //       --cc-sbcard-title: var(--primary-color);
  //       --cc-sbcard-meta-text: var(--gray-800);
  //       --cc-sbcard-dot-divider: var(--gray-200);
  //       --cc-sbcard-moreinfo-bg: none;
  //       --cc-sbcard-moreinfo-bordertop: #cacbce;
  //       --cc-sbcard-meta2-text: var(--gray-800);
  //       --cc-sbcard-org-text: var(--gray-200);
  //       --cc-sbcard-type-bg: var(--gray-200);
  //       --cc-sbcard-type-text: var(--white);
  //       --cc-sbcard-rv-img-container-bg: var(--gray-100);
  //       --cc-sbcard-type-br: var(--gray-200);
  //       /* group card */
  //       --cc-sbcard-img-label: #284C3F;
  //       --cc-sbcard-img-label-bg: #B3EBD7;
  //       --cc-sbcard-img-badge-bg: var(--black);
  //       --cc-sbcard-img-badge-text: var(--white);
  //       --cc-sblabel-badge-br: var(--secondary-color);
  //       --cc-sblabel-badge-text: var(--secondary-color);
  //     }`
  // },
  {
    expandCode: false,
    title: "Card style 5",
    description: "",
    url: "https://stackblitz.com/edit/angular-router-basic-example-pogmh9?file=app/cards/card-five/card-five.component.html",
    demoCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Card Title">Card Title</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Card description">Card description</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
      </div>
      `,
    copyCode: `
      <div class="sb--card sb--card--course" tabindex="0">
        <div class="sb--card__main-area">
          <div class="sb--card__img">
            <div class="img-container">
              <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
            </div>
          </div>
          <div class="sb--card__info">
            <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
            <div class="sb--card__meta1 text-left">
              <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
            </div>
          </div>
        </div> 
        <div class="sb--card__meta_c_data">
          <span class="">Language : Social Science</span>
        </div>
      </div>
      `,
    copyCSS: `
    .sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 0.125rem;
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 5.5rem;
    }
    .sb--card__img {
      height: 4.5rem;
      width: 4.5rem;
      overflow: hidden;
      flex: 0 0 4.5rem;
      margin: 0.5rem;
    }
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 4.5rem;
      width: 4.5rem;
      justify-content: center;
    }
    .sb--card__img .img-container img {
      max-width: 100%;
    }
    .sb--card__info {
      flex: 1;
      overflow: hidden;
    }
    .sb--card__title {
      color: var(--cc-sbcard-title);
      font-size: 0.875rem;
      margin: 0px;
      line-height: normal;
    }
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 0.75rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 1.25rem;
      margin-top: 0.25rem;
    }
    .sb--card .data_1 {
      max-width: 50%;
    }
    .sb__ellipsis {
      -webkit-box-orient: vertical;
      display: block;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-box;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
    .sb__ellipsis--two {
      -webkit-line-clamp: 2;
    }
    .sb--card--course .sb--card__meta_c_data {
      min-height: 2rem;
      padding: 0.5rem;
      background-color: var(--cc-sbcard-metaC-data);
      font-size: .8rem;
    }
    `,
    copyVar: `
    :root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-metaC-data: var(--rc-FAFAFA);
    }
    `
  },
  // {
  //   expandCode: false,
  //   title: "Card style 7",
  //   description: ``,
  //   url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
  //   demoCode: `
  //   <div class="sb--card sb--card--course" tabindex="0">
  //   <div class="sb--card__main-area">
  //     <div class="sb--card__img">
  //       <div class="img-container">
  //         <img [src]="cardImg" alt="">
  //       </div>
  //     </div>
  //     <div class="sb--card__info">
  //       <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Dashboard Loadtest">Dashboard Loadtest</h4>
  //       <div class="sb--card__meta1 text-left">
  //         <span class="data_1 sb__ellipsis sb__ellipsis--two" title="Pre-prod Custodian Organization">Pre-prod Custodian Organization</span>
  //       </div>
  //     </div>
  //   </div> 
  // </div>
  //       `,
  //   copyCode: `
  //       <div class="sb--card sb--card--course--curiculum" tabindex="0" style="background: rgb(218, 212, 255)">
  //         <div class="sb--card__main-area">
  //           <div class="sb--card__info pl-8">
  //             <h4 class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="{{title}}" style="color: rgb(47, 39, 185)">Practice question set</h4>
  //             <div class="sb--card__meta1 text-left">
  //               <span class="data_1 ellipsis" title="{{subTitle}}">Sub Title</span>
  //             </div>
  //           </div>
  //           <!-- card img -->
  //           <div class="sb--card__img">
  //             <div class="img-container">
  //               <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       `,
  //   copyCSS: `
  //       .sb--card {
  //         width: 100%;
  //         background-color: var(--cc-sbcard-bg);
  //         display: flex;
  //         flex-direction: column;
  //         cursor: pointer;
  //         position: relative;
  //         margin-top: 0px;
  //         border: 0px;
  //         contain: content;
  //         border-radius: 0.125rem;
  //       }
  //       .sb--card__main-area {
  //         display: flex;
  //         flex-direction: row;
  //         align-items: center;
  //         height: 5.5rem;
  //       }
  //       .sb--card__info {
  //         padding: 0 0.5rem 0 0;
  //         flex: 1;
  //         overflow: hidden;
  //       }
  //       .sb--card__title {
  //         color: var(--cc-sbcard-title);
  //         font-size: 0.875rem;
  //         margin: 0px;
  //         line-height: normal;
  //         line-height: 1.25rem;
  //         font-weight:bold;
  //       }
  //       .sb--card__info {
  //         flex: 1;
  //         overflow: hidden;
  //       }
  //       .sb__ellipsis {
  //         -webkit-box-orient: vertical;
  //         display: block;
  //         display: -webkit-box;
  //         display: -moz-box;
  //         display: -ms-box;
  //         -webkit-line-clamp: 1;
  //         overflow: hidden;
  //         text-overflow: ellipsis;
  //         word-break: break-word;
  //       }
  //       .sb__ellipsis--three {
  //         -webkit-line-clamp: 3;
  //       }
  //       .sb--card__meta1 {
  //         color: var(--cc-sbcard-meta-text);
  //         font-size: 0.75rem;
  //         display: flex;
  //         flex-direction: row;
  //         align-items: center;
  //         flex: 1;
  //         line-height: 1.25rem;
  //         margin-top: 0.25rem;
  //       }
  //       .sb--card .data_1 {
  //         max-width: 50%;
  //       }
  //       .ellipsis {
  //         white-space: nowrap;
  //         overflow: hidden;
  //         text-overflow: ellipsis;
  //         cursor: pointer;
  //       }
  //       `,
  //   copyVar: `
  //     :root {
  //       --cc-sbcard-bg: var(--white);
  //       --cc-sbcard-title: var(--primary-color);
  //       --cc-sbcard-meta-text: var(--gray-800);
  //     }`
  // },
//   {
//     expandCode: false,
//     title: "Card style 8",
//     description: ``,
//     url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
//     demoCode: `<div class="sb--card sb--card--course--curiculum" tabindex="0" style="background: rgb(218, 212, 255)">
//     <div class="sb--card__main-area">
//       <div class="sb--card__info pl-8">
//         <h4 class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="{{title}}" style="color: rgb(47, 39, 185)">Practice question set</h4>
//         <div class="sb--card__meta1 text-left">
//           <span class="data_1 ellipsis" title="{{subTitle}}">Sub Title</span>
//         </div>
//       </div>
//       <!-- card img -->
//       <div class="sb--card__img">
//         <div class="img-container">
//           <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
//         </div>
//       </div>
//     </div>
//   </div>`,
//     copycode: `<div class="sb--card sb--card--course--curiculum" tabindex="0" style="background: rgb(218, 212, 255)">
//   <div class="sb--card__main-area">
//     <div class="sb--card__info pl-8">
//       <h4 class="sb--card__title sb__ellipsis sb__ellipsis--three text-left" title="{{title}}" style="color: rgb(47, 39, 185)">Practice question set</h4>
//       <div class="sb--card__meta1 text-left">
//         <span class="data_1 ellipsis" title="{{subTitle}}">Sub Title</span>
//       </div>
//     </div>
//     <!-- card img -->
//     <div class="sb--card__img">
//       <div class="img-container">
//         <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="">
//       </div>
//     </div>
//   </div>
// </div>`,
//     copyCSS: `
//         .sb--card {
//           width: 100%;
//           background-color: var(--cc-sbcard-bg);
//           display: flex;
//           flex-direction: column;
//           cursor: pointer;
//           position: relative;
//           margin-top: 0px;
//           border: 0px;
//           contain: content;
//           border-radius: 0.125rem;
//         }
//         .sb--card__main-area {
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           height: 5.5rem;
//         }
//         .sb--card__info {
//           padding: 0 0.5rem 0 0;
//           flex: 1;
//           overflow: hidden;
//         }
//         .sb--card__title {
//           color: var(--cc-sbcard-title);
//           font-size: 0.875rem;
//           margin: 0px;
//           line-height: normal;
//           line-height: 1.25rem;
//           font-weight:bold;
//         }
//         .sb--card__info {
//           flex: 1;
//           overflow: hidden;
//         }
//         .sb__ellipsis {
//           -webkit-box-orient: vertical;
//           display: block;
//           display: -webkit-box;
//           display: -moz-box;
//           display: -ms-box;
//           -webkit-line-clamp: 1;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           word-break: break-word;
//         }
//         .sb__ellipsis--three {
//           -webkit-line-clamp: 3;
//         }
//         .sb--card__meta1 {
//           color: var(--cc-sbcard-meta-text);
//           font-size: 0.75rem;
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           flex: 1;
//           line-height: 1.25rem;
//           margin-top: 0.25rem;
//         }
//         .sb--card .data_1 {
//           max-width: 50%;
//         }
//         .ellipsis {
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           cursor: pointer;
//         }
//         `,
//     copyVar: `
//       :root {
//         --cc-sbcard-bg: var(--white);
//         --cc-sbcard-title: var(--primary-color);
//         --cc-sbcard-meta-text: var(--gray-800);
//       }`
//   },
  // {
  //   expandCode: false,
  //   id: "psection2",
  //   title: "Card style 7",
  //   description: `<p>Members list are showing with menu and status of member in the member card.</p>`,
  //   url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
  //   demoCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
  //       <div class="sb-member text-left">
  //           <div class="sb-member__img"><span>D</span></div>
  //           <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
  //       </div>
  //        <div class="d-flex flex-ai-center pr-8">
  //          <div class="d-flex flex-ai-center">
  //            <div class="status">Admin</div>
  //            <div class="menu ml-8" tabindex="0"></div>
  //          </div>
  //        <div tabindex="0"><img src="" alt=""></div>
  //      </div>
  //    </div>`,
  //   copyCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
  //       <div class="sb-member text-left">
  //           <div class="sb-member__img"><span>D</span></div>
  //           <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
  //       </div>
  //        <div class="d-flex flex-ai-center pr-8">
  //          <div class="d-flex flex-ai-center">
  //            <div class="status">Admin</div>
  //            <div class="menu ml-8" tabindex="0"></div>
  //          </div>
  //        <div tabindex="0"><img src="" alt=""></div>
  //      </div>
  //    </div>`,
  //   copyCSS: ``,
  //   copyVar: ``
  // },
  // {
  //   expandCode: false,
  //   title: "Card style 8",
  //   description: ``,
  //   url: "https://stackblitz.com/edit/web-platform-m2whsk?file=cards/groups/basic/index.html",
  //   demoCode: `
  //       <div class="sb-notification-list p-8" tabindex="0">
  //         <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
  //           <div class="notification-info d-flex flex-ai-center mb-8">
  //           <div class="status"></div>
  //             <div class="date ml-8">Mon, 13 February 13:13</div>
  //           </div>
  //           <div class="delete-icon" tabindex="0">
  //             <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
  //             <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
  //           </div>
  //         </div>
  //         <div class="sb-notification-data d-flex flex-ai-center">
  //           <div class="logo">
  //             <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
  //           </div>
  //           <div class="ml-12 notification-content">
  //             <div class="title active"> 4.5 No cert Course has been assigned to test group by sdsdsd1</div>
  //             <div class="sub-title py-8">Notfication description</div>
  //           </div>
  //         </div>
  //       </div>
  //       `,
  //   copyCode: `
  //       <div class="sb-notification-list p-8" tabindex="0">
  //         <div class="sb-notification-list-header d-flex flex-ai-center flex-jc-space-between">
  //           <div class="notification-info d-flex flex-ai-center mb-8">
  //           <div class="status"></div>
  //             <div class="date ml-8">Mon, 13 February 13:13</div>
  //           </div>
  //           <div class="delete-icon" tabindex="0">
  //             <img class="Delete-gray" src="assets/images/Delete-gray.svg" alt="" alt="delete" width="14px">
  //             <img class="Delete-red" src="assets/images/Delete-red.svg" alt="" alt="delete" width="14px">
  //           </div>
  //         </div>
  //         <div class="sb-notification-data d-flex flex-ai-center">
  //           <div class="logo">
  //             <img src="https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_312957752291999744156/artifact/apbstf-logo_1581756068016.thumb.jpg" width="20px">
  //           </div>
  //           <div class="ml-12 notification-content">
  //             <div class="title active"> 4.5 No cert Course has been assigned to test group by sdsdsd1</div>
  //             <div class="sub-title py-8">Notfication description</div>
  //           </div>
  //         </div>
  //       </div>
  //       `,
  //   copyCSS: `
  //       .sb-notification-list {
  //         border-radius: 0.5rem;
  //         background-color: var(--cc-notification-list-bg);
  //         box-shadow: 0.3125rem 0.3125rem 0.125rem 0 rgba(var(--rc-rgba-black), 0.1);
  //         margin-bottom: 0.5rem;
  //         border: 0.03125rem solid var(--cc-notification-list-br);
  //       }
  //       .sb-notification-list .sb-notification-list-header .notification-info .date {
  //         color: var(--cc-notification-date-text);
  //         font-size: 0.75rem;
  //       }
  //       .sb-notification-list .sb-notification-list-header .delete-icon .Delete-red {
  //         display: none;
  //       }
  //       .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-red {
  //         display: block;
  //       }
  //       .sb-notification-list:hover .sb-notification-list-header .delete-icon .Delete-gray {
  //         display: none;
  //       }
  //       .sb-notification-list .sb-notification-data .notification-content {
  //         overflow: hidden;
  //       }
  //       .sb-notification-list .sb-notification-data .notification-content .title {
  //         color: var(--cc-notification-title-text);
  //         font-size: 0.875rem;
  //         font-weight: bold;
  //         overflow: hidden;
  //         text-overflow: ellipsis;
  //         white-space: nowrap;
  //       }
  //       .sb-notification-list .sb-notification-data .notification-content .sub-title {
  //         color: var(--cc-notification-subtitle-text);
  //         font-size: 0.75rem;
  //         overflow: hidden;
  //         text-overflow: ellipsis;
  //         white-space: nowrap;
  //       }
  //       .sb-notification-list .sb-notification-data .logo {
  //         height: 2rem;
  //         width: 2rem;
  //         border-radius: 0.5rem;
  //         background-color: var(--cc-notification-logo-bg);
  //         display: inline-flex;
  //         align-items: center;
  //         justify-content: center;
  //       }
  //       .sb-notification-list .sb-notification-data .logo img {
  //         height: 1.5rem;
  //         max-width: 1.25rem;
  //       }
  //       .sb-notification-list .sb-notification-data .notification-content .title.active {
  //         color: var(--cc-notification-title-active);
  //       }
  //       .sb-notification-list .sb-notification-list-header .notification-info .status {
  //         height: 0.5rem;
  //         width: 0.5rem;
  //         background-color: var(--orange);
  //         border-radius: 0.5rem;
  //       }
  //       `,
  //   copyVar: `
  //       :root {
  //         --cc-notification-list-bg: var(--white);
  //         --cc-notification-list-br: var(--rc-dddddd);
  //         --cc-notification-date-text: var(--gray-200);
  //         --cc-notification-title-text: var(--gray-400);
  //         --cc-notification-subtitle-text: var(--gray-400);
  //         --cc-notification-logo-bg:var(--gray-0);
  //         --cc-notification-status-bg:var(--gray-200);
  //         --cc-notification-title-active:var(--primary-color);
  //       }
  //     `
  // },


];