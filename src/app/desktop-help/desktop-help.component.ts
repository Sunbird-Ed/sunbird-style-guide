import { Component, OnInit, Renderer2, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-desktop-help',
  templateUrl: './desktop-help.component.html',
  styleUrls: ['./desktop-help.component.scss']
})
export class DesktopHelpComponent implements OnInit {
  videoitems = [
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    },
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    },
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    },
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    },
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    },
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    },
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    },
    {
      imgpath: '',
      text: 'Photographs are a way of preserving a moment in our lives for the rest of our lives.'
    }

  ];

  @ViewChild('aspectRatio', { static: true }) aspectRatio;
  @ViewChild('playerInfo', { static: true }) playerInfo;

  videoContainerHeight: number;
  aspectRatioHeight: number;
  playerInfoHeight: number;

  selectOption: any;
  panelOpened = false;
  selectMedium: { name: string; id: string; value: string; };
  showNormalModal;
  issueReportText = false;
  showSkeletonLoader = false;
  skeletonHeight = '16px';
  skeletonWidth = '100%';

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }
  ngOnInit() {

    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
    this.aspectRatioHeight = this.aspectRatio.nativeElement.offsetHeight;
    this.playerInfoHeight = this.playerInfo.nativeElement.offsetHeight;
    this.videoContainerHeight = this.aspectRatioHeight + this.playerInfoHeight;

    this.selectOption = [
      {
        name: 'English',
        value: '0'
      }, {
        name: 'Hindi',
        value: '1'
      }, {
        name: 'Urdu',
        value: '2'
      }, {
        name: 'Marathi',
        value: '3'
      }
      , {
        name: 'Kannada',
        value: '4'
      }
      , {
        name: 'Telugu',
        value: '5'
      }
      , {
        name: 'Tamil',
        value: '6'
      }
      , {
        name: 'Malayalam',
        value: '7'
      }
    ];
    this.selectMedium = this.selectOption[0];

    setTimeout(() => {
      this.showSkeletonLoader = !this.showSkeletonLoader;
    }, 3000);
  }

  // @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.aspectRatioHeight = event.target.document.querySelector('#help-video-aspect-ratio').offsetHeight;
    this.videoContainerHeight = this.aspectRatioHeight + this.playerInfoHeight;
  }
  submitIssue() {
    this.issueReportText = !this.issueReportText;
  }
}
