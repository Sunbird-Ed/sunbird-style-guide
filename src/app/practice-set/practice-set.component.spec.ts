import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSetComponent } from './practice-set.component';

describe('PracticeSetComponent', () => {
  let component: PracticeSetComponent;
  let fixture: ComponentFixture<PracticeSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
