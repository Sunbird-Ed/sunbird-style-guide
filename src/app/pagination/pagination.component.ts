import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {


  constructor() { }

  pageTitle = 'Pagination';
  sections = [
    {
      expandCode: false,
      title: 'Basic Pagination',
      demoCode: `
      <div class="sb-pagination-container">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `,
      copyCode: `
      <div class="sb-pagination-container">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `
    },
    {
      expandCode: false,
      title: 'Pagination in small size',
      demoCode: `
      <div class="sb-pagination-container">
            <div class="sb-pagination mini">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `,
      copyCode: `
      <div class="sb-pagination-container">
            <div class="sb-pagination mini">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `
    },
    {
      expandCode: false,
      title: 'Pagination in large size',
      demoCode: `
      <div class="sb-pagination-container">
            <div class="sb-pagination large">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `,
      copyCode: `
      <div class="sb-pagination-container">
            <div class="sb-pagination large">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `
    },
    {
      expandCode: false,
      title: 'Pagination in Center',
      demoCode: `
      <div class="sb-pagination-container flex-jc-center">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `,
      copyCode: `
      <div class="sb-pagination-container flex-jc-center">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `
    },
    {
      expandCode: false,
      title: 'Pagination in Right',
      demoCode: `
      <div class="sb-pagination-container flex-jc-flex-end">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `,
      copyCode: `
      <div class="sb-pagination-container flex-jc-flex-end">
            <div class="sb-pagination">
                <a class="sb-item">First</a>
                <a class="sb-item">Previous</a>
                <a class="sb-item sb-item-active">1</a>
                <a class="sb-item">...</a>
                <a class="sb-item">10</a>
                <a class="sb-item">11</a>
                <a class="sb-item">12</a>
                <a class="sb-item">Next</a>
                <a class="sb-item">Last</a>
            </div>
        </div>
      `
    },
  ];

  ngOnInit() {
  }

}
