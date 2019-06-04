import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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
    const data = document.getElementById('pdf-cover');
    const options = {background: 'white', height: data.clientHeight, width: data.clientWidth};
    html2canvas(data, options).then(canvas => {
      const doc = new jspdf('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/PNG');
      doc.addImage(imgData, 'PNG', 20, 20);
      const pdfOutput = doc.output();
      const buffer = new ArrayBuffer(pdfOutput.length);
      const array = new Uint8Array(buffer);
      for (let i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
      }
      const fileName = 'example.pdf';
      doc.save(fileName);
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

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  ngOnInit() {
  }

}
