import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoolingAtHomeComponent } from './scooling-at-home.component';

describe('ScoolingAtHomeComponent', () => {
  let component: ScoolingAtHomeComponent;
  let fixture: ComponentFixture<ScoolingAtHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoolingAtHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoolingAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
