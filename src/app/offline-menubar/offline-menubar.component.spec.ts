import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineMenubarComponent } from './offline-menubar.component';

describe('OfflineMenubarComponent', () => {
  let component: OfflineMenubarComponent;
  let fixture: ComponentFixture<OfflineMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
