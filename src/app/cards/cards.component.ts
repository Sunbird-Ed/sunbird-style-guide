import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  constructor() { }

  pageTitle = 'Cards';
  sections = [
    {
      expandCode: false,
      title: 'Course Card',
      demoCode: `
      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning system and its application
              </div>
              <div class="sb-card-meta-item">
                Subtopic : Limits of artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress success">
            <div class="bar" style="width: 100%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning
              </div>
              <div class="sb-card-meta-item">
                Subtopic : artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structures
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
            </div>
          </div>
          <h4 class="sb-card-title">
            Global positioning system and its application & Limits of artificial ...
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
              موضوع: گلوبل پوزیشننگ سسٹم اور اس کی درخواست
              </div>
              <div class="sb-card-meta-item">
              ذیلی موضوع: مصنوعی انٹیلی جنس کی حد
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          گلوبل پوزیشننگ سسٹم اور اس کی درخواست اور مصنوعی حدود 
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning system and its application
              </div>
              <div class="sb-card-meta-item">
                Subtopic : Limits of artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress success">
            <div class="bar" style="width: 100%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning
              </div>
              <div class="sb-card-meta-item">
                Subtopic : artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structures
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
            </div>
          </div>
          <h4 class="sb-card-title">
            Global positioning system and its application & Limits of artificial ...
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
              موضوع: گلوبل پوزیشننگ سسٹم اور اس کی درخواست
              </div>
              <div class="sb-card-meta-item">
              ذیلی موضوع: مصنوعی انٹیلی جنس کی حد
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          گلوبل پوزیشننگ سسٹم اور اس کی درخواست اور مصنوعی حدود 
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Resource Card',
      demoCode: `
      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Book</div>
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">ورکشاپ</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
              مضمون: انگریزی
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              درمیانہ: دیگر
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      `,
      copyCode: `
      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Book</div>
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <div class="sb-card d-inline-block mr-15" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-15">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">ورکشاپ</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
              مضمون: انگریزی
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              درمیانہ: دیگر
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      `
    }
  ];

  ngOnInit() {
  }
  

}
