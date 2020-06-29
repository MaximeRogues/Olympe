import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonstresComponent } from './add-monstres.component';


describe('AddMonstresComponent', () => {
  let component: AddMonstresComponent;
  let fixture: ComponentFixture<AddMonstresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonstresComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMonstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
