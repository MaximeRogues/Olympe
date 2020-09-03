import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEspaceMembreComponent } from './edit-espace-membre.component';

describe('EditEspaceMembreComponent', () => {
  let component: EditEspaceMembreComponent;
  let fixture: ComponentFixture<EditEspaceMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEspaceMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEspaceMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
