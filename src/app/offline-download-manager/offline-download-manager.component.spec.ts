import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineDownloadManagerComponent } from './offline-download-manager.component';

describe('OfflineDownloadManagerComponent', () => {
  let component: OfflineDownloadManagerComponent;
  let fixture: ComponentFixture<OfflineDownloadManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineDownloadManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineDownloadManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
