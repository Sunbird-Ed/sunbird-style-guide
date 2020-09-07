import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsNewComponent } from './buttons-new.component';

describe('ButtonsNewComponent', () => {
  let component: ButtonsNewComponent;
  let fixture: ComponentFixture<ButtonsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
