import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schooling-at-home',
  templateUrl: './schooling-at-home.component.html',
  styleUrls: ['./schooling-at-home.component.scss']
})

export class schoolingAtHomeComponent implements OnInit, OnDestroy  {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

  panelOpened = false;
  screenSequence = {'school-box-layout':true,'school-information':false};
  allLayouts:any[] = ['school-box-layout','school-information'];
  visitedBack:boolean = false;
  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }

  next(){
    this.allLayouts.forEach((each, index)=>{
     
      if(this.screenSequence[each] && this.allLayouts[index+1]){
        this.screenSequence[each] = false;
        this.screenSequence[this.allLayouts[index+1]] = true;
        this.visitedBack = true;
      }
    })
  }
  prev(){
    this.allLayouts.forEach((each, index)=>{
     
      if(this.screenSequence[each] && this.allLayouts[index-1]){
        this.screenSequence[each] = false;
        this.screenSequence[this.allLayouts[index-1]] = true;
      }
    })
  }

  get disableBack(){
    if(this.allLayouts && this.allLayouts.length && this.screenSequence && this.screenSequence[this.allLayouts[0]]){
      this.renderer.addClass(this.document.body, 'hideLeftTopBars');
      return true;
    }
    else return false;
  }
}
