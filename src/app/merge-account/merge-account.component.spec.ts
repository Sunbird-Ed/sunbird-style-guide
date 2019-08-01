import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeAccountComponent } from './merge-account.component';

describe('MergeAccountComponent', () => {
  let component: MergeAccountComponent;
  let fixture: ComponentFixture<MergeAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
