import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CClibraryCardComponent } from './cc-library-card.component';

describe('CClibraryCardComponent', () => {
  let component: CClibraryCardComponent;
  let fixture: ComponentFixture<CClibraryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CClibraryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CClibraryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
