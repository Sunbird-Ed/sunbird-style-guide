import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineHeaderComponent } from './offline-header.component';

describe('OfflineHeaderComponent', () => {
  let component: OfflineHeaderComponent;
  let fixture: ComponentFixture<OfflineHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
