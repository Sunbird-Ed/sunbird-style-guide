import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineTelemetryComponent } from './offline-telemetry.component';

describe('OfflineTelemetryComponent', () => {
  let component: OfflineTelemetryComponent;
  let fixture: ComponentFixture<OfflineTelemetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineTelemetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
