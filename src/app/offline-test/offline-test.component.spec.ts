import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineTestComponent } from './offline-test.component';

describe('OfflineTestComponent', () => {
  let component: OfflineTestComponent;
  let fixture: ComponentFixture<OfflineTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
