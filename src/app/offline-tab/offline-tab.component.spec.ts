import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineTabComponent } from './offline-tab.component';

describe('OfflineTabComponent', () => {
  let component: OfflineTabComponent;
  let fixture: ComponentFixture<OfflineTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
