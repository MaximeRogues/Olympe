import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonstreComponent } from './edit-monstre.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


describe('EditMonstreComponent', () => {
  let component: EditMonstreComponent;
  let fixture: ComponentFixture<EditMonstreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMonstreComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ]

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
