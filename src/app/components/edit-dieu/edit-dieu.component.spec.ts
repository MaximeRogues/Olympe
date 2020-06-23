import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDieuComponent } from './edit-dieu.component';

describe('EditDieuComponent', () => {
  let component: EditDieuComponent;
  let fixture: ComponentFixture<EditDieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
