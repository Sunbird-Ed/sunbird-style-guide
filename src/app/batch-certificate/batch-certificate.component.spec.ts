import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCertificateComponent } from './batch-certificate.component';

describe('BatchCertificateComponent', () => {
  let component: BatchCertificateComponent;
  let fixture: ComponentFixture<BatchCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
