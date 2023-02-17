import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sunbirdWebAppComponent } from './sunbird-web-app.component';

describe('sunbirdWebAppComponent', () => {
  let component: sunbirdWebAppComponent;
  let fixture: ComponentFixture<sunbirdWebAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sunbirdWebAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sunbirdWebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
