import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHerosComponent } from './add-heros.component';


describe('AddHerosComponent', () => {
  let component: AddHerosComponent;
  let fixture: ComponentFixture<AddHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHerosComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
