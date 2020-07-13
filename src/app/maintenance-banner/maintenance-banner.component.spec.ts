import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBannerComponent } from './maintenance-banner.component';

describe('MaintenanceBannerComponent', () => {
  let component: MaintenanceBannerComponent;
  let fixture: ComponentFixture<MaintenanceBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
