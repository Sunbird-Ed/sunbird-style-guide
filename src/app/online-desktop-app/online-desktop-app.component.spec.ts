import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDesktopAppComponent } from './online-desktop-app.component';

describe('OnlineDesktopAppComponent', () => {
  let component: OnlineDesktopAppComponent;
  let fixture: ComponentFixture<OnlineDesktopAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDesktopAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDesktopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
