import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreFilterComponent } from './explore-filter.component';

describe('ExploreFilterComponent', () => {
  let component: ExploreFilterComponent;
  let fixture: ComponentFixture<ExploreFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
