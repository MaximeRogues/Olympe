import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonstreComponent } from './edit-monstre.component';


describe('EditMonstreComponent', () => {
  let component: EditMonstreComponent;
  let fixture: ComponentFixture<EditMonstreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMonstreComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMonstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
