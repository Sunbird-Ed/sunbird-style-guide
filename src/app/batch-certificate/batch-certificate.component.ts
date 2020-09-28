import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch-certificate',
  templateUrl: './batch-certificate.component.html',
  styleUrls: ['./batch-certificate.component.scss']
})
export class BatchCertificateComponent implements OnInit {
  showErrorModal;
  showLargeModal;
  ;showTemplateDetectModal;
  showscreen: boolean;
  videoContainerHeight: number;
  aspectRatioHeight: number;
  playerInfoHeight: number;
  
  configureCertificate = [
    { title:"Course on teaching Science for upper primary teachers" ,imagePath:"assets/images/certificate-icon.png"},
    { title:"Course on teaching Science for upper primary teachers" ,imagePath:"assets/images/certificate-icon.png" },
    { title:"Personal safety course" ,imagePath:"assets/images/certificate-icon.png" },
    { title:"PISA orientation" , count:3 ,imagePath:"assets/images/certificate-icon.png"},
    { title:"Initiatives in school education" ,imagePath:"assets/images/certificate-icon.png" }
  ];
  showanotherscreen: boolean;
  
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.videoContainerHeight = this.aspectRatioHeight + this.playerInfoHeight;
  }

  // @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.aspectRatioHeight = event.target.document.querySelector('#help-video-aspect-ratio').offsetHeight;
    this.videoContainerHeight = this.aspectRatioHeight + this.playerInfoHeight;
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
  secondscreen(){
    this.showscreen = !this.showscreen;
  }
  thirdscreen(){
    this.showanotherscreen = !this.showanotherscreen; 
  }
}
