import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolingBoxLayoutComponent } from './schooling-box-layout.component';

describe('SchoolingBoxLayoutComponent', () => {
  let component: SchoolingBoxLayoutComponent;
  let fixture: ComponentFixture<SchoolingBoxLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolingBoxLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolingBoxLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
