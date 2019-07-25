import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkuploadsComponent } from './bulkuploads.component';

describe('BulkuploadsComponent', () => {
  let component: BulkuploadsComponent;
  let fixture: ComponentFixture<BulkuploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkuploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
