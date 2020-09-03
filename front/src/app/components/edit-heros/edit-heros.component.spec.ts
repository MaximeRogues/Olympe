import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHerosComponent } from './edit-heros.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


describe('EditHerosComponent', () => {
  let component: EditHerosComponent;
  let fixture: ComponentFixture<EditHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHerosComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ]

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
