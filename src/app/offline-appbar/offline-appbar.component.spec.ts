import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineAppbarComponent } from './offline-appbar.component';

describe('OfflineAppbarComponent', () => {
  let component: OfflineAppbarComponent;
  let fixture: ComponentFixture<OfflineAppbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineAppbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
