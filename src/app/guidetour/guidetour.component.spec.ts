import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidetourComponent } from './guidetour.component';

describe('GuidetourComponent', () => {
  let component: GuidetourComponent;
  let fixture: ComponentFixture<GuidetourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidetourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
