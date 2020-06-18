import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDieuxComponent } from './add-dieux.component';

describe('AddDieuxComponent', () => {
  let component: AddDieuxComponent;
  let fixture: ComponentFixture<AddDieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDieuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
