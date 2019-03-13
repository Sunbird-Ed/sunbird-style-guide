import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastersComponent } from './toasters.component';

describe('ToastersComponent', () => {
  let component: ToastersComponent;
  let fixture: ComponentFixture<ToastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
