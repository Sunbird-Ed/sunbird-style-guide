import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmlSolutionsComponent } from './qml-solutions.component';

describe('QmlSolutionsComponent', () => {
  let component: QmlSolutionsComponent;
  let fixture: ComponentFixture<QmlSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmlSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmlSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
