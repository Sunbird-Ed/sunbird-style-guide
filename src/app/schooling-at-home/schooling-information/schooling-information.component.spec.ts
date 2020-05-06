import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolingInformationComponent } from './schooling-information.component';

describe('SchoolingInformationComponent', () => {
  let component: SchoolingInformationComponent;
  let fixture: ComponentFixture<SchoolingInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolingInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
