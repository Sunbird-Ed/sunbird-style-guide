import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineMenuComponent } from './offline-menu.component';

describe('OfflineMenuComponent', () => {
  let component: OfflineMenuComponent;
  let fixture: ComponentFixture<OfflineMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
