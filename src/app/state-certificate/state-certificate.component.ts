import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-state-certificate',
  templateUrl: './state-certificate.component.html',
  styleUrls: ['./state-certificate.component.scss']
})
export class StateCertificateComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }
  ngOnInit() {

    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

}
