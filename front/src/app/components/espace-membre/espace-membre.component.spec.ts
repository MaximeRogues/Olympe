import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMembreComponent } from './espace-membre.component';

describe('EspaceMembreComponent', () => {
  let component: EspaceMembreComponent;
  let fixture: ComponentFixture<EspaceMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
