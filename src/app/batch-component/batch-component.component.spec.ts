import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchComponentComponent } from './batch-component.component';

describe('BatchComponentComponent', () => {
  let component: BatchComponentComponent;
  let fixture: ComponentFixture<BatchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
