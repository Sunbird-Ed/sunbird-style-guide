import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaDashboardComponent } from './sa-dashboard.component';

describe('SaDashboardComponent', () => {
  let component: SaDashboardComponent;
  let fixture: ComponentFixture<SaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
