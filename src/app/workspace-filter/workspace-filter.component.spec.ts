import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceFilterComponent } from './workspace-filter.component';

describe('WorkspaceFilterComponent', () => {
  let component: WorkspaceFilterComponent;
  let fixture: ComponentFixture<WorkspaceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
