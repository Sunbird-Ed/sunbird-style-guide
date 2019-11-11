import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHelpComponent } from './desktop-help.component';

describe('DesktopHelpComponent', () => {
  let component: DesktopHelpComponent;
  let fixture: ComponentFixture<DesktopHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
