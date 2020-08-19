import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DikshaWebAppComponent } from './diksha-web-app.component';

describe('DikshaWebAppComponent', () => {
  let component: DikshaWebAppComponent;
  let fixture: ComponentFixture<DikshaWebAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DikshaWebAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DikshaWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
