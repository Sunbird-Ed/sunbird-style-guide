import { Component, OnInit, OnDestroy, Inject, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-to-library',
	templateUrl: './add-to-library.component.html',
	styleUrls: [ './add-to-library.component.scss' ]
})
export class AddToLibraryComponent implements OnInit {
	Classes = [ { name: 'class 1' }, { name: 'class 2' }, { name: 'class 3' } ];

	sbcards = [
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		},
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		},
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		},
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		},
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		},
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		},
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		},
		{
			title: 'Great thinkers',
			subject: 'Social Science',
			class: 'Class 8',
			medium: 'Hindi',
			board: 'CBSE',
			type: 'Book'
		}
	];

	enableTocPlayerGrid: boolean = false;
	enableSuggestions: boolean = false;
	disableTocOnly: boolean = true;
  showFilter: boolean = false;
  selectedItem;
	constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) {}

	ngOnInit() {
		this.renderer.addClass(this.document.body, 'hideLeftTopBars');
	}

	enableTocPlayer(event, newValue1) {
    console.log(newValue1);
    this.selectedItem = newValue1;
		this.enableTocPlayerGrid = true;
		this.disableTocOnly = true;
	}
	enablePlayer(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;
		this.disableTocOnly = false;
		this.enableTocPlayerGrid = true;
		//document.querySelector('SectionSuggestionsID').scrollIntoView({ behavior: 'smooth' });
	}

	ngAfterViewInit() {}

	ngOnDestroy(): void {
		this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
	}
}
