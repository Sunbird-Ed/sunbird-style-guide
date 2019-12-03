import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsCarouselComponent } from './pills-carousel.component';

describe('PillsCarouselComponent', () => {
  let component: PillsCarouselComponent;
  let fixture: ComponentFixture<PillsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
