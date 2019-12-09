import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineContentComponent } from './offline-content.component';

describe('OfflineContentComponent', () => {
  let component: OfflineContentComponent;
  let fixture: ComponentFixture<OfflineContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
