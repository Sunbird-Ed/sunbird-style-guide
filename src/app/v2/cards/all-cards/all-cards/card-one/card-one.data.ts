export const cardData = [
  {
    expandCode: false,
    id: 'libraryv1-5',
    title: "Card style 1",
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
  }`
}
];