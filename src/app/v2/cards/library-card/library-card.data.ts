export const libraryCardData = [
  {
    expandCode: false,
    id: 'libraryv1-1',
    title: "Library card V1 for Desktop & Web(Portal)",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
        <div class="sb--card__moreinfo">
            <div class="sb--card__meta2 text-left">
                <div class="sb--card__meta2_data">Medium: medium</div>
                <div class="sb--card__org sb__ellipsis">organisation</div>
            </div>
            <div class="sb--card__tags">
                <span class="sb--card__badge"><img alt="" title=""
                        src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
                <span class="sb--card__type">resourceType</span>
            </div>
        </div>
    </div>`,
    copyCode: `<div class="sb--card mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
        <div class="sb--card__moreinfo">
            <div class="sb--card__meta2 text-left">
                <div class="sb--card__meta2_data">Medium: medium</div>
                <div class="sb--card__org sb__ellipsis">organisation</div>
            </div>
            <div class="sb--card__tags">
                <span class="sb--card__badge"><img alt="" title=""
                        src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
                <span class="sb--card__type">resourceType</span>
            </div>
        </div>
    </div>`,
    copyCode2: `  .sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 2px;
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 88px;
    }
  
    .sb--card__img {
      height: 72px;
      width: 72px;
      overflow: hidden;
      flex: 0 0 72px;
      margin: 8px;
    }
  
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 72px;
      width: 72px;
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
      font-size: 14px;
      margin: 0px;
      line-height: normal;
    }
  
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 20px;
    }
  
    .sb--card .data_1 {
      max-width: 50%;
    }
  
    .sb--card .data_2 {
      flex: 1;
    }
  
    .sb--card .dot-divider {
      width: 4px;
      height: 4px;
      min-width: 4px;
      max-width: 4px;
      min-height: 4px;
      max-height: 4px;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 8px;
    }
  
    .sb--card__moreinfo {
      border-radius: 0 0 2px 2px;
      background-color: var(--cc-sbcard-moreinfo-bg);
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      border-top: 0px solid var(--cc-sbcard-moreinfo-bordertop);
    }
  
    .sb--card__meta2 {
      color: var(--cc-sbcard-meta2-text);
      font-size: 12px;
      line-height: 14px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 8px;
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
    }
  
    .sb--card__badge img {
      width: 20px;
      height: 20px;
    }`,
    copyCode3: `:root {
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
    }`
  },
  {
    expandCode: false,
    id: 'libraryv1-2',
    title: "Library card V1 for Mobile",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
    </div>`,
    copyCode: `<div class="sb--card mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
    </div>`,
    copyCode2: `.sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 2px;
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 88px;
    }
  
    .sb--card__img {
      height: 72px;
      width: 72px;
      overflow: hidden;
      flex: 0 0 72px;
      margin: 8px;
    }
  
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 72px;
      width: 72px;
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
      font-size: 14px;
      margin: 0px;
      line-height: normal;
    }
  
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 20px;
    }
  
    .sb--card .data_1 {
      max-width: 50%;
    }
  
    .sb--card .data_2 {
      flex: 1;
    }
  
    .sb--card .dot-divider {
      width: 4px;
      height: 4px;
      min-width: 4px;
      max-width: 4px;
      min-height: 4px;
      max-height: 4px;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 8px;
    }
  `,
    copyCode3: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-dot-divider: var(--gray-200);
      --cc-sbcard-moreinfo-bg: none;
      --cc-sbcard-moreinfo-bordertop: #cacbce;

    }`
  },
  {
    expandCode: false,
    id: 'libraryv1-3',
    title: "Library card V1 for Mobile (Recently viewed)",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--recently-viewed mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
    </div>`,
    copyCode: `<div class="sb--card sb--card--recently-viewed mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
    </div>`,
    copyCode2: `.sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 2px;
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 88px;
    }
  
    .sb--card__img {
      height: 72px;
      width: 72px;
      overflow: hidden;
      flex: 0 0 72px;
      margin: 8px;
    }
  
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 72px;
      width: 72px;
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
      font-size: 14px;
      margin: 0px;
      line-height: normal;
    }
  
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 20px;
    }
  
    .sb--card .data_1 {
      max-width: 50%;
    }
  
    .sb--card .data_2 {
      flex: 1;
    }
  
    .sb--card .dot-divider {
      width: 4px;
      height: 4px;
      min-width: 4px;
      max-width: 4px;
      min-height: 4px;
      max-height: 4px;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 8px;
    }
    
    .sb--card--recently-viewed .sb--card__img {
      height: 88px;
      width: 88px;
      flex: 0 0 88px;
      margin: 0;
    }
  
    .sb--card--recently-viewed .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-rv-img-container-bg);
      height: 88px;
      width: 88px;
      border-radius: 0rem;
    }
  
    .sb--card--recently-viewed .sb--card__info {
      padding: 8px 16px;
    }`,
    copyCode3: `:root {
      --cc-sbcard-bg: var(--white);
      --cc-sbcard-img-container-bg: var(--gray-100);
      --cc-sbcard-title: var(--primary-color);
      --cc-sbcard-meta-text: var(--gray-800);
      --cc-sbcard-dot-divider: var(--gray-200);
      --cc-sbcard-moreinfo-bg: none;
      --cc-sbcard-moreinfo-bordertop: #cacbce;
      --cc-sbcard-meta2-text: var(--gray-800);
    }`
  },
  {
    expandCode: false,
    id: 'libraryv1-4',
    title: "Library card V1 Selected view for Desktop & Web(Portal)",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card selected mb-16" tabindex="0" role="button">
      <div class="sb--card__main-area">
          <!-- card img -->
          <div class="sb--card__img">
              <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
          </div>
          <!-- card mobile view details -->
          <div class="sb--card__info">
              <div class="sb--card__meta1">
                  <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                  Title comes here</h4>
                  <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
              </div>  
      
              <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                  <span class="dot-divider"></span>
                  <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
              </div>
          </div>
      </div>
      <div class="sb--card__moreinfo">
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data">Medium: medium</div>
              <div class="sb--card__org sb__ellipsis">organisation</div>
          </div>
          <div class="sb--card__tags">
              <span class="sb--card__badge"><img alt="" title=""
                      src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
              <span class="sb--card__type">resourceType</span>
          </div>
      </div>
  </div>`,
    copyCode: `<div class="sb--card selected mb-16" tabindex="0" role="button">
      <div class="sb--card__main-area">
          <!-- card img -->
          <div class="sb--card__img">
              <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
          </div>
          <!-- card mobile view details -->
          <div class="sb--card__info">
              <div class="sb--card__meta1">
                  <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                  Title comes here</h4>
                  <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
              </div>  
      
              <div class="sb--card__meta1 text-left">
                  <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                  <span class="dot-divider"></span>
                  <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
              </div>
          </div>
      </div>
      <div class="sb--card__moreinfo">
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data">Medium: medium</div>
              <div class="sb--card__org sb__ellipsis">organisation</div>
          </div>
          <div class="sb--card__tags">
              <span class="sb--card__badge"><img alt="" title=""
                      src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
              <span class="sb--card__type">resourceType</span>
          </div>
      </div>
  </div>`,
    copyCode2: `.sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 2px;
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 88px;
    }
  
    .sb--card__img {
      height: 72px;
      width: 72px;
      overflow: hidden;
      flex: 0 0 72px;
      margin: 8px;
    }
  
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 72px;
      width: 72px;
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
      font-size: 14px;
      margin: 0px;
      line-height: normal;
    }
  
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 20px;
    }
  
    .sb--card .data_1 {
      max-width: 50%;
    }
  
    .sb--card .data_2 {
      flex: 1;
    }
  
    .sb--card .dot-divider {
      width: 4px;
      height: 4px;
      min-width: 4px;
      max-width: 4px;
      min-height: 4px;
      max-height: 4px;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 8px;
    }
    .sb--card.selected {
      border: 0.063rem solid var(--cc-sbcard-selected-border);
      border-radius: 0.25rem;
      background-color: var(--cc-sbcard-selected-bg);
    }
`,
    copyCode3: `:root {
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
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg: rgba(2, 79, 157, 0.2);
    }`
  },
  {
    expandCode: false,
    id: 'libraryv1-5',
    title: "Library card V1 with QR code button",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card mb-16" tabindex="0" role="button">
                    <div class="sb--card__main-area">
                        <!-- card img -->
                        <div class="sb--card__img">
                            <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
                        </div>
                        <!-- card mobile view details -->
                        <div class="sb--card__info">
                            <div class="sb--card__meta1">
                                <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                                Title comes here</h4>
                                <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                            </div>  
                    
                            <div class="sb--card__meta1 text-left">
                                <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                                <span class="dot-divider"></span>
                                <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                            </div>
                        </div>
                    </div>
                    <div class="sb--card__moreinfo">
                        <div class="sb--card__meta2 text-left">
                            <div class="sb--card__meta2_data">Medium: medium</div>
                            <div class="sb--card__org sb__ellipsis">organisation</div>
                        </div>
                        <div class="sb--card__tags">
                            <span class="sb--card__badge"><img alt="" title=""
                                    src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
                            <span class="sb--card__type">resourceType</span>
                        </div>
                    </div>
                    <div>
                      <div>
                        <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
                      </div>
                    </div>
                </div>`,
    copyCode: `<div class="sb--card mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
        <div class="sb--card__moreinfo">
            <div class="sb--card__meta2 text-left">
                <div class="sb--card__meta2_data">Medium: medium</div>
                <div class="sb--card__org sb__ellipsis">organisation</div>
            </div>
            <div class="sb--card__tags">
                <span class="sb--card__badge"><img alt="" title=""
                        src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
                <span class="sb--card__type">resourceType</span>
            </div>
        </div>
        <div>
          <div>
            <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
          </div>
        </div>
    </div>`,
    copyCode2: `.sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 2px;
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 88px;
    }
  
    .sb--card__img {
      height: 72px;
      width: 72px;
      overflow: hidden;
      flex: 0 0 72px;
      margin: 8px;
    }
  
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 72px;
      width: 72px;
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
      font-size: 14px;
      margin: 0px;
      line-height: normal;
    }
  
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 20px;
    }
  
    .sb--card .data_1 {
      max-width: 50%;
    }
  
    .sb--card .data_2 {
      flex: 1;
    }
  
    .sb--card .dot-divider {
      width: 4px;
      height: 4px;
      min-width: 4px;
      max-width: 4px;
      min-height: 4px;
      max-height: 4px;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 8px;
    }`,
    copyCode3: `:root {
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
    }`
  },
  {
    expandCode: false,
    id: 'libraryv1-6',
    title: "Library card V1 (Offline)",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card mb-16 offline" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
        <div class="sb--card__moreinfo">
            <div class="sb--card__meta2 text-left">
                <div class="sb--card__meta2_data">Medium: medium</div>
                <div class="sb--card__org sb__ellipsis">organisation</div>
            </div>
            <div class="sb--card__tags">
                <span class="sb--card__badge"><img alt="" title=""
                        src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
                <span class="sb--card__type">resourceType</span>
            </div>
        </div>
    </div>`,
    copyCode: `<div class="sb--card mb-16 offline" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                    <a aria-label="View more actions" class="menu" role="button" tabindex="0"></a>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
        <div class="sb--card__moreinfo">
            <div class="sb--card__meta2 text-left">
                <div class="sb--card__meta2_data">Medium: medium</div>
                <div class="sb--card__org sb__ellipsis">organisation</div>
            </div>
            <div class="sb--card__tags">
                <span class="sb--card__badge"><img alt="" title=""
                        src="https://material.angular.io/assets/img/examples/shiba2.jpg"></span>
                <span class="sb--card__type">resourceType</span>
            </div>
        </div>
    </div>`,
    copyCode2: `.sb--card {
      width: 100%;
      background-color: var(--cc-sbcard-bg);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      margin-top: 0px;
      border: 0px;
      contain: content;
      border-radius: 2px;
    }
    .sb--card__main-area {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 88px;
    }
  
    .sb--card__img {
      height: 72px;
      width: 72px;
      overflow: hidden;
      flex: 0 0 72px;
      margin: 8px;
    }
  
    .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-img-container-bg);
      height: 72px;
      width: 72px;
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
      font-size: 14px;
      margin: 0px;
      line-height: normal;
    }
  
    .sb--card__meta1 {
      color: var(--cc-sbcard-meta-text);
      font-size: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      line-height: 20px;
    }
  
    .sb--card .data_1 {
      max-width: 50%;
    }
  
    .sb--card .data_2 {
      flex: 1;
    }
  
    .sb--card .dot-divider {
      width: 4px;
      height: 4px;
      min-width: 4px;
      max-width: 4px;
      min-height: 4px;
      max-height: 4px;
      border-radius: 100%;
      background-color: var(--cc-sbcard-dot-divider);
      display: inline-block;
      margin: 0px 8px;
    }
    .sb--card.offline .sb--card__img .img-container {
      display: flex;
      align-items: center;
      background-color: var(--cc-sbcard-offline-bg);
      opacity: 0.5;
    }
  
    .sb--card.offline .sb--card__img .img-container img {
      margin: auto;
      font-size: 24px;
      color: var(--cc-sbcard-offline-img-text);
    }
  
    .sb--card.offline .sb--card__info,
    .sb--card.offline .sb--card__moreinfo {
      opacity: 0.5;
    }
    `,
    copyCode3: `:root {
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
      --cc-sbcard-offline-bg: var(--tertiary-color);
      --cc-sbcard-offline-img-text: var(--white);
    }`
  },
  {
    expandCode: false,
    id: 'libraryv2-1',
    title: "Library card V2 for mobile",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
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
              Content Name</h4>
          </div>
          <div class="sb--card__meta1 text-left">
              <span class="data_0 mr-8 organisation" title="">organisation</span>
              <span class="data_0 mr-8" title="">+11</span>
      
              <span class="data_1 mr-8 medium" title="">Medium</span>
              <span class="data_1 mr-8" title="">+3</span>
      
              <span class="data_2" title="">Grade level</span>
              <span class="data_2" title="">+4</span>
          </div>
        </div>
        <!-- content for only desktop -->

      
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
              Content Name</h4>
          </div>
          <div class="sb--card__meta1 text-left">
              <span class="data_0 mr-8 organisation" title="">organisation</span>
              <span class="data_0 mr-8" title="">+11</span>
      
              <span class="data_1 mr-8 medium" title="">Medium</span>
              <span class="data_1 mr-8" title="">+3</span>
      
              <span class="data_2" title="">Grade level</span>
              <span class="data_2" title="">+4</span>
          </div>
        </div>

      
      </div>
      `,
    copyCode2: ` .sb--card.sb--card--theme2 {
      box-shadow: var(--sbt-box-shadow-6px);
      border-radius: 24px;
      overflow: hidden;
    }
  
    .sb--card.sb--card--theme2 .sb--card-svg-tail {
      position: absolute;
      bottom: 0px;
      right: 24px;
    }

    .sb--card.sb--card--theme2 .sb--card-svg-tail__rc {
      fill: transparent;
      stroke: var(--primary-color);
    }
  
    .sb--card.sb--card--theme2 .sb--card__svg-area {
      height: 72px;
      width: 100%;
      border-radius: 16px;
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

    .sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type::before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
      position: absolute;
      right: -0.6rem;
      transform: rotatey(-180deg);
      left: inherit;
    }

    .sb--card.sb--card--theme2 .sb--card__info {
      padding: 0 1rem;
    }

    .sb--card.sb--card--theme2 .sb--card__title {
      margin-right: 88px;
    }

    .sb--card.sb--card--theme2 .sb--card__meta {
      height: 40px;
      display: flex;
      align-items: center;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta1 {
      height: 56px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta2 {
      padding: .5rem 1rem 1rem 1rem;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos {
      margin: 0;
      overflow: inherit;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos .img-container {
      box-shadow: 0 0 0.313rem 0 rgba(var(--rc-rgba-black), 0.1);
    }
  
    .border-top-r-left-right {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    `,
    copyCode3: `:root {
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
    id: 'libraryv2-2',
    title: "Library card V2 for desktop view",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
    
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge" *ngIf="content?.badgeAssertions"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
    
    </div>
    `,
    copyCode2: `.sb--card.sb--card--theme2 {
      box-shadow: var(--sbt-box-shadow-6px);
      border-radius: 24px;
      overflow: hidden;
    }
  
    .sb--card.sb--card--theme2 .sb--card-svg-tail {
      position: absolute;
      bottom: 0px;
      right: 24px;
    }

    .sb--card.sb--card--theme2 .sb--card-svg-tail__rc {
      fill: transparent;
      stroke: var(--primary-color);
    }
  
    .sb--card.sb--card--theme2 .sb--card__svg-area {
      height: 72px;
      width: 100%;
      border-radius: 16px;
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

    .sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type::before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
      position: absolute;
      right: -0.6rem;
      transform: rotatey(-180deg);
      left: inherit;
    }

    .sb--card.sb--card--theme2 .sb--card__info {
      padding: 0 1rem;
    }

    .sb--card.sb--card--theme2 .sb--card__title {
      margin-right: 88px;
    }

    .sb--card.sb--card--theme2 .sb--card__meta {
      height: 40px;
      display: flex;
      align-items: center;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta1 {
      height: 56px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta2 {
      padding: .5rem 1rem 1rem 1rem;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos {
      margin: 0;
      overflow: inherit;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos .img-container {
      box-shadow: 0 0 0.313rem 0 rgba(var(--rc-rgba-black), 0.1);
    }
  
    .border-top-r-left-right {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }`,
    copyCode3: `:root {
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
    id: 'libraryv2-3',
    title: "Library card V2 selected",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 selected" role="link" tabindex="0">
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
    
    </div>
    `,
    copyCode: `<div class="sb--card sb--card--theme2 selected" role="link" tabindex="0">
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge" *ngIf="content?.badgeAssertions"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
    
    </div>
    `,
    copyCode2: `.sb--card.sb--card--theme2 {
      box-shadow: var(--sbt-box-shadow-6px);
      border-radius: 24px;
      overflow: hidden;
    }
  
    .sb--card.sb--card--theme2 .sb--card-svg-tail {
      position: absolute;
      bottom: 0px;
      right: 24px;
    }

    .sb--card.sb--card--theme2 .sb--card-svg-tail__rc {
      fill: transparent;
      stroke: var(--primary-color);
    }
  
    .sb--card.sb--card--theme2 .sb--card__svg-area {
      height: 72px;
      width: 100%;
      border-radius: 16px;
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

    .sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type::before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
      position: absolute;
      right: -0.6rem;
      transform: rotatey(-180deg);
      left: inherit;
    }

    .sb--card.sb--card--theme2 .sb--card__info {
      padding: 0 1rem;
    }

    .sb--card.sb--card--theme2 .sb--card__title {
      margin-right: 88px;
    }

    .sb--card.sb--card--theme2 .sb--card__meta {
      height: 40px;
      display: flex;
      align-items: center;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta1 {
      height: 56px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta2 {
      padding: .5rem 1rem 1rem 1rem;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos {
      margin: 0;
      overflow: inherit;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos .img-container {
      box-shadow: 0 0 0.313rem 0 rgba(var(--rc-rgba-black), 0.1);
    }
  
    .border-top-r-left-right {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }`,
    copyCode3: `:root {
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg: rgba(2, 79, 157, 0.2);
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
    id: 'libraryv2-4',
    title: "Library card V2 for desktop with QR code btn",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
      <div>
        <div>
          <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
        </div>
      </div>
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge" *ngIf="content?.badgeAssertions"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
      <div>
          <div>
            <button class="sb-btn sb-btn-primary sb-btn-normal w-100 border-top-r-left-right"><i class="icon-svg icon-svg--xxs icon-videos mr-4"><svg _ngcontent-kli-c4="" class="icon icon-svg--white"><use _ngcontent-kli-c4="" xlink:href="assets/images/sprite.svg#play"></use></svg></i> btnlabel </button>
          </div>
      </div>
    </div>
    `,
    copyCode2: `.sb--card.sb--card--theme2 {
      box-shadow: var(--sbt-box-shadow-6px);
      border-radius: 24px;
      overflow: hidden;
    }
  
    .sb--card.sb--card--theme2 .sb--card-svg-tail {
      position: absolute;
      bottom: 0px;
      right: 24px;
    }

    .sb--card.sb--card--theme2 .sb--card-svg-tail__rc {
      fill: transparent;
      stroke: var(--primary-color);
    }
  
    .sb--card.sb--card--theme2 .sb--card__svg-area {
      height: 72px;
      width: 100%;
      border-radius: 16px;
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

    .sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type::before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
      position: absolute;
      right: -0.6rem;
      transform: rotatey(-180deg);
      left: inherit;
    }

    .sb--card.sb--card--theme2 .sb--card__info {
      padding: 0 1rem;
    }

    .sb--card.sb--card--theme2 .sb--card__title {
      margin-right: 88px;
    }

    .sb--card.sb--card--theme2 .sb--card__meta {
      height: 40px;
      display: flex;
      align-items: center;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta1 {
      height: 56px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta2 {
      padding: .5rem 1rem 1rem 1rem;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos {
      margin: 0;
      overflow: inherit;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos .img-container {
      box-shadow: 0 0 0.313rem 0 rgba(var(--rc-rgba-black), 0.1);
    }
  
    .border-top-r-left-right {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }`,
    copyCode3: `:root {
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
    id: 'libraryv2-5',
    title: "Library card V2 for Offline view",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 offline" role="link" tabindex="0">
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
    
    </div>
    `,
    copyCode: `<div class="sb--card sb--card--theme2 offline" role="link" tabindex="0">
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
            Content Name</h4>
        </div>
        <div class="sb--card__meta1 text-left">
            <span class="data_0 mr-8 organisation" title="">organisation</span>
            <span class="data_0 mr-8" title="">+11</span>
    
            <span class="data_1 mr-8 medium" title="">Medium</span>
            <span class="data_1 mr-8" title="">+3</span>
    
            <span class="data_2" title="">Grade level</span>
            <span class="data_2" title="">+4</span>
        </div>
      </div>
      <!-- content for only desktop -->
      <div>
        <div class="sb--card__moreinfo">
          <!-- other meta info subject, publisher/organizer etc -->
          <div class="sb--card__meta2 text-left">
              <div class="sb--card__meta2_data sb__ellipsis subject">
                <span>Subject: </span> <span title="">Telugu</span> <span class="data_1 mr-8" title=""> +5
                </span>
              </div>
              <div class="sb--card__meta2_data sb__ellipsis organisation">
                <span>Publisher: </span> <span title="">Org</span>
                <span class="data_1 mr-8" title=""> +6
                </span>
              </div>
    
          </div>
          <!-- other meta info Badge and card category Book, learn, practice -->
          <div class="sb--card__tags">
            <span class="sb--card__badge" *ngIf="content?.badgeAssertions"><img
                src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" title="" /></span>
            <!-- <span class="sb--card__type" *ngIf="content?.contentType">{{content?.contentType}}</span> -->
          </div>
        </div>
    
      </div>
    
    </div>
    `,
    copyCode2: `.sb--card.sb--card--theme2 {
      box-shadow: var(--sbt-box-shadow-6px);
      border-radius: 24px;
      overflow: hidden;
    }
  
    .sb--card.sb--card--theme2 .sb--card-svg-tail {
      position: absolute;
      bottom: 0px;
      right: 24px;
    }

    .sb--card.sb--card--theme2 .sb--card-svg-tail__rc {
      fill: transparent;
      stroke: var(--primary-color);
    }
  
    .sb--card.sb--card--theme2 .sb--card__svg-area {
      height: 72px;
      width: 100%;
      border-radius: 16px;
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

    .sb--card.sb--card--theme2 .sb--card__main-area .sb--card__type::before {
      border-color: var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) var(--cc-sbcard-type-br) transparent;
      position: absolute;
      right: -0.6rem;
      transform: rotatey(-180deg);
      left: inherit;
    }

    .sb--card.sb--card--theme2 .sb--card__info {
      padding: 0 1rem;
    }

    .sb--card.sb--card--theme2 .sb--card__title {
      margin-right: 88px;
    }

    .sb--card.sb--card--theme2 .sb--card__meta {
      height: 40px;
      display: flex;
      align-items: center;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta1 {
      height: 56px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
  
    .sb--card.sb--card--theme2 .sb--card__meta2 {
      padding: .5rem 1rem 1rem 1rem;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos {
      margin: 0;
      overflow: inherit;
    }
  
    .sb--card.sb--card--theme2 .sb--card__image-pos .img-container {
      box-shadow: 0 0 0.313rem 0 rgba(var(--rc-rgba-black), 0.1);
    }
  
    .border-top-r-left-right {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    `,
    copyCode3: `:root {
      --cc-sbcard-offline-bg: var(--tertiary-color);
      --cc-sbcard-offline-img-text: var(--white);
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
    id: 'libraryv3-1',
    title: "Library card V3",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 version3" role="link" tabindex="0">
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
    copyCode: `<div class="sb--card mb-16" tabindex="0" role="button">
        <div class="sb--card__main-area">
            <!-- card img -->
            <div class="sb--card__img">
                <div class="img-container"><img alt="" src="https://material.angular.io/assets/img/examples/shiba2.jpg"></div>
            </div>
            <!-- card mobile view details -->
            <div class="sb--card__info">
                <div class="sb--card__meta1">
                    <h4 class="sb--card__title sb__ellipsis sb__ellipsis--two text-left flex-basis-1" title="Title comes here">
                    Title comes here</h4>
                </div>  
        
                <div class="sb--card__meta1 text-left">
                    <span class="data_1 ellipsis" title="subject comes here">dsubject comes here</span>
                    <span class="dot-divider"></span>
                    <span class="data_2 ellipsis" title="grade level comes here">grade level comes here</span>
                </div>
            </div>
        </div>
    </div>`,
    copyCode2: `  .sb--card.sb--card--theme2.version3 {
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
    copyCode3: `:root {
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
    id: 'libraryv3-2',
    title: "Library card V3 Selected state",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 version3 selected" role="link" tabindex="0">
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
    copyCode: `<div class="sb--card sb--card--theme2 version3 selected" role="link" tabindex="0">
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
    copyCode2: `  .sb--card.sb--card--theme2.version3 {
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
    copyCode3: `:root {
      --cc-sbcard-selected-border: var(--primary-color);
      --cc-sbcard-selected-bg: rgba(2, 79, 157, 0.2);
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
    id: 'libraryv3-3',
    title: "Library card V3 Desktop only",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 version3" role="link" tabindex="0">
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
                <a role="button" aria-label="View more actions menu" class="menu"></a>
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
    copyCode: `<div class="sb--card sb--card--theme2 version3" role="link" tabindex="0">
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
                <a role="button" aria-label="View more actions menu" class="menu"></a>
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
    copyCode2: `  .sb--card.sb--card--theme2.version3 {
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
    copyCode3: `:root {
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
    id: 'libraryv3-4',
    title: "Library card V3 Offline",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 version3 offline" role="link" tabindex="0">
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
    copyCode: `<div class="sb--card sb--card--theme2 version3 offline" role="link" tabindex="0">
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
    copyCode2: `  .sb--card.sb--card--theme2.version3 {
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
    copyCode3: `:root {
      --cc-sbcard-offline-bg: var(--tertiary-color);
      --cc-sbcard-offline-img-text: var(--white);
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
    id: 'libraryv4-1',
    title: "Library card V4",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 version4" tabindex="0">
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
    copyCode: `<div class="sb--card sb--card--theme2 version4" tabindex="0">
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
    copyCode2: `  .sb--card.sb--card--theme2.version4 {
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
  {
    expandCode: false,
    id: 'libraryv4-2',
    title: "Library card V4 selected",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 version4 selected" tabindex="0">
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
    copyCode: `<div class="sb--card sb--card--theme2 version4 selected" tabindex="0">
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
    copyCode2: `  .sb--card.sb--card--theme2.version4 {
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
  {
    expandCode: false,
    id: 'libraryv4-3',
    title: "Library card V4 offline",
    url: "https://stackblitz.com/edit/angular-router-basic-example-wkxsa9?file=app/app.component.html",
    demoCode: `<div class="sb--card sb--card--theme2 version4 offline" tabindex="0">
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
    copyCode: `<div class="sb--card sb--card--theme2 version4 offline" tabindex="0">
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
    copyCode2: `  .sb--card.sb--card--theme2.version4 {
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
  }
];


