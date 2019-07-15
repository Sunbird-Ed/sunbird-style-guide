import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineDesktopAppComponent } from './offline-desktop-app.component';

describe('OfflineTelemetryComponent', () => {
  let component: OfflineDesktopAppComponent;
  let fixture: ComponentFixture<OfflineDesktopAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineDesktopAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineDesktopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
