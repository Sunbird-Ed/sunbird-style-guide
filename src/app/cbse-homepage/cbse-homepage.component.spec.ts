import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbseHomepageComponent } from './cbse-homepage.component';

describe('CbseHomepageComponent', () => {
  let component: CbseHomepageComponent;
  let fixture: ComponentFixture<CbseHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbseHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbseHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
