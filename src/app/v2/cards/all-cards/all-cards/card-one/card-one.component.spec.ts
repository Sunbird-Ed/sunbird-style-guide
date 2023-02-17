/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardOneComponent } from './card-one.component';

describe('CardOneComponent', () => {
  let component: CardOneComponent;
  let fixture: ComponentFixture<CardOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
