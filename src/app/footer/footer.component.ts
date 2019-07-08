import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  HighlightResult
} from 'ngx-highlightjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  @Input() ShowContent;
  constructor() { }

  pageTitle = 'Footer';
  sections = [{
    expandCode: false,
    title: 'Footer Bar',
    demoCode: `
    <footer class="footer">
    <div class="ui container">
      <div class="ui grid stackable px-16">
        <div class="four wide column footerMenu mr-auto">
          <ul class="p-0 m-0">
            <li class="mb-16">
              <a href="javascript:void(0)" title="Verticals">Verticals</a>
            </li>
            <li class="mb-16">
              <a href="javascript:void(0)" title="Help Center">
                Help Center
              </a>
            </li>
            <li class="mb-16">
              <a href="javascript:void(0)" title="Partners">
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div class="download-diksha">
          <div class="diksha-logo p-16">
            <div class="mobile-circles">
              <div class="big-box border-round border-r50"></div>
              <div class="oval-box border-round ml-16"></div>
              <div class="small-box border-round border-r50 ml-24 mr-8"></div>
              <div class="small-box border-round border-r50"></div>
            </div>
            <label class="d-block mb-8">Download DIKSHA for Mobile</label>
            <a href="javascript:void(0)" class="d-block pb-8 app-download">
              <img class="playStore-img" src="assets/images/google_playstore.png" alt="">
            </a>
            <p class="d-block">Get unlimited access to textbooks, lessons and courses offline on your mobile phone.
            </p>
          </div>
        </div>
        <div class="four wide column contantDetails">
          <label class="d-block mb-8">
            Contact for queries:
          </label>
          <a  href="mailto:support@diksha-ncte.freshdesk.com" class="d-block mb-32">
            support@diksha-ncte.freshdesk.com
          </a>
          <label class="d-block">
            <a href="javascript:void(0)">Terms of use</a>
            <span>| &copy; 2019, DIKSHA</span>
          </label>
        </div>
      </div>
    </div>
  </footer>
      `,
    copyCode: `
    <footer class="footer">
    <div class="ui container">
      <div class="ui grid stackable px-16">
        <div class="four wide column footerMenu mr-auto">
          <ul class="p-0 m-0">
            <li class="mb-16">
              <a href="javascript:void(0)" title="Verticals">Verticals</a>
            </li>
            <li class="mb-16">
              <a href="javascript:void(0)" title="Help Center">
                Help Center
              </a>
            </li>
            <li class="mb-16">
              <a href="javascript:void(0)" title="Partners">
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div class="download-diksha">
          <div class="diksha-logo p-16">
            <div class="mobile-circles">
              <div class="big-box border-round border-r50"></div>
              <div class="oval-box border-round ml-16"></div>
              <div class="small-box border-round border-r50 ml-24 mr-8"></div>
              <div class="small-box border-round border-r50"></div>
            </div>
            <label class="d-block mb-8">Download DIKSHA for Mobile</label>
            <a href="javascript:void(0)" class="d-block pb-8 app-download">
              <img class="playStore-img" src="assets/images/google_playstore.png" alt="">
            </a>
            <p class="d-block">Get unlimited access to textbooks, lessons and courses offline on your mobile phone.
            </p>
          </div>
        </div>
        <div class="four wide column contantDetails">
          <label class="d-block mb-8">
            Contact for queries:
          </label>
          <a  href="mailto:support@diksha-ncte.freshdesk.com" class="d-block mb-32">
            support@diksha-ncte.freshdesk.com
          </a>
          <label class="d-block">
            <a href="javascript:void(0)">Terms of use</a>
            <span>| &copy; 2019, DIKSHA</span>
          </label>
        </div>
      </div>
    </div>
  </footer>
      `
  }];


  ngOnInit() { }

}
