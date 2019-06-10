import { Component, OnInit, HostListener } from '@angular/core';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import mediumZoom from 'medium-zoom';


declare const TestFunction: any;
@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})



export class HelpCenterComponent implements OnInit {

  constructor() { }
  isShow: boolean;
  topPosToStartShowing = 100;

  public generatepdf() {
    // const data = document.getElementById('pdf-cover');
    // const options = {background: 'white', height: data.clientHeight, width: data.clientWidth};
    // html2canvas(data, options).then(canvas => {
    //   const doc = new jspdf('p', 'mm', 'a4');
    //   const imgData = canvas.toDataURL('image/PNG');
    //   doc.addImage(imgData, 'PNG', 20, 20);
    //   const pdfOutput = doc.output();
    //   const buffer = new ArrayBuffer(pdfOutput.length);
    //   const array = new Uint8Array(buffer);
    //   for (let i = 0; i < pdfOutput.length; i++) {
    //     array[i] = pdfOutput.charCodeAt(i);
    //   }
    //   const fileName = 'example.pdf';
    //   doc.save(fileName);
    // });

    const data = document.getElementById('pdf-cover');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, heightLeft);
      pdf.save('help-center.pdf');
    });

  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  TestFunction() {
    alert('test');
  }




  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }


  ngOnInit() {



  }

  ngAfterViewInit() {
    mediumZoom('img');
    //mediumZoom(document.querySelector('.mediumZoom'));
  }

}
