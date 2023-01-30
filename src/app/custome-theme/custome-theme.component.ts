import { Component, OnInit, Inject, Renderer2, OnDestroy } from '@angular/core';
import { ThemeService } from '../theme.service';
import { DOCUMENT } from '@angular/common';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-custome-theme',
  templateUrl: './custome-theme.component.html',
  styleUrls: ['./custome-theme.component.scss']
})
export class CustomeThemeComponent implements OnInit, OnDestroy {

  darkTheme = new FormControl(false);

  constructor(@Inject(DOCUMENT) private document: Document, private themeService: ThemeService,  private renderer: Renderer2) {
    this.darkTheme.valueChanges.subscribe(value => {
      if(value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    })
   }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
}
