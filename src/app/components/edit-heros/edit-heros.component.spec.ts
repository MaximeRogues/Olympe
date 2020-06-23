import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHerosComponent } from './edit-heros.component';

describe('EditHerosComponent', () => {
  let component: EditHerosComponent;
  let fixture: ComponentFixture<EditHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
