import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { schoolingAtHomeComponent } from './schooling-at-home.component';

describe('schoolingAtHomeComponent', () => {
  let component: schoolingAtHomeComponent;
  let fixture: ComponentFixture<schoolingAtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ schoolingAtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(schoolingAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
