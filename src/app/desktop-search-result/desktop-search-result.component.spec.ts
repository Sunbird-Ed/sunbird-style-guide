import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSearchResultComponent } from './desktop-search-result.component';

describe('DesktopSearchResultComponent', () => {
  let component: DesktopSearchResultComponent;
  let fixture: ComponentFixture<DesktopSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
