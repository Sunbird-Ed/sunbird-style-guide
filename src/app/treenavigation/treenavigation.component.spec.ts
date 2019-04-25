import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreenavigationComponent } from './treenavigation.component';

describe('TreenavigationComponent', () => {
  let component: TreenavigationComponent;
  let fixture: ComponentFixture<TreenavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreenavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
