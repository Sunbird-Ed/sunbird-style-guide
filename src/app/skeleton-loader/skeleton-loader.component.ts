import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input('height') height: string;
  @Input('width') width: string;

  skeletonStyles: object;

  constructor() { }

  ngOnInit() {
    console.log('widht and height received', this.height, this.width);
    this.skeletonStyles = {
      'height' : this.height ? this.height : '8px',
      'width' : this.width ? this.width : '100%'
    };
  }

}
