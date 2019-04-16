import {
  Component,
  OnInit
} from '@angular/core';
import {
  HighlightResult
} from 'ngx-highlightjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor() {}

  pageTitle = 'Footer';
  sections = [{
    expandCode: false,
    title: 'Footer Bar',
    demoCode: `
    <footer class="footer" *ngIf="showFooter">
    <div class="ui container">
  <div class="ui grid stackable">
    <div class="four wide column footerMenu mr-auto">
      <ul class="p-0 m-0">
        <li class="mb-15">
          <a>
            Verticals
          </a>
        </li>
        <li class="mb-15">
          <a>
            Help Center
          </a>
        </li>
        <li class="mb-15">
          <a>
            Partners
          </a>
        </li>
      </ul>
    </div>

    <div class="download-diksha">
      <div class="diksha-logo p-15">
        <div class="mobile-circles">
          <div class="big-box border-round border-r50"></div>
          <div class="oval-box border-round ml-20 ml-10"></div>
          <div class="small-box border-round border-r50 ml-20 mr-10"></div>
          <div class="small-box border-round border-r50"></div>
        </div>
        <label class="d-block pb-10">Download DIKSHA for Mobile</label>
        <a class="d-block pb-10 app-download">
          <img class="playStore-img" src="/assets/images/google_playstore.png"
            alt="">
        </a>
        <p class="d-block">Get unlimited access to textbooks, lessons and courses offline on your mobile phone.</p>
      </div>
    </div>
    <div class="four wide column contantDetails">
      <label class="d-block mb-10">
        Contact for queries:
      </label>
      <a class="d-block mb-30">
        support@diksha-ncte.freshdesk.com
      </a>
      <label class="d-block">
        <a >
          Terms of use
        </a>
        <span>| &copy; 2019, DIKSHA</span>
      </label>
    </div>
  </div>
</div>
</footer>
      `,
    copyCode: `
    <footer class="footer" *ngIf="showFooter">
    <div class="ui container">
  <div class="ui grid stackable">
    <div class="four wide column footerMenu mr-auto">
      <ul class="p-0 m-0">
        <li class="mb-15">
          <a>
            Verticals
          </a>
        </li>
        <li class="mb-15">
          <a>
            Help Center
          </a>
        </li>
        <li class="mb-15">
          <a>
            Partners
          </a>
        </li>
      </ul>
    </div>

    <div class="download-diksha">
      <div class="diksha-logo p-15">
        <div class="mobile-circles">
          <div class="big-box border-round border-r50"></div>
          <div class="oval-box border-round ml-20 ml-10"></div>
          <div class="small-box border-round border-r50 ml-20 mr-10"></div>
          <div class="small-box border-round border-r50"></div>
        </div>
        <label class="d-block pb-10">Download DIKSHA for Mobile</label>
        <a class="d-block pb-10 app-download">
          <img class="playStore-img" src="/assets/images/google_playstore.png"
            alt="">
        </a>
        <p class="d-block">Get unlimited access to textbooks, lessons and courses offline on your mobile phone.</p>
      </div>
    </div>
    <div class="four wide column contantDetails">
      <label class="d-block mb-10">
        Contact for queries:
      </label>
      <a class="d-block mb-30">
        support@diksha-ncte.freshdesk.com
      </a>
      <label class="d-block">
        <a >
          Terms of use
        </a>
        <span>| &copy; 2019, DIKSHA</span>
      </label>
    </div>
  </div>
</div>
</footer>
      `
  }];


  ngOnInit() {}

}
