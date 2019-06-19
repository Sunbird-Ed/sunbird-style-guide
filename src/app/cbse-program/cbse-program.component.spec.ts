import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBSEProgramComponent } from './cbse-program.component';

describe('CBSEProgramComponent', () => {
  let component: CBSEProgramComponent;
  let fixture: ComponentFixture<CBSEProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBSEProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBSEProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
