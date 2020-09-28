import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCertificateComponent } from './state-certificate.component';

describe('StateCertificateComponent', () => {
  let component: StateCertificateComponent;
  let fixture: ComponentFixture<StateCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
