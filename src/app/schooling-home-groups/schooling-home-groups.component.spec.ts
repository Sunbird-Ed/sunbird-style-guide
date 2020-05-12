import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolingHomeGroupsComponent } from './schooling-home-groups.component';

describe('SchoolingHomeGroupsComponent', () => {
  let component: SchoolingHomeGroupsComponent;
  let fixture: ComponentFixture<SchoolingHomeGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolingHomeGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolingHomeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
