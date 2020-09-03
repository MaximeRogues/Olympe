import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDieuComponent } from './edit-dieu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditDieuComponent', () => {
  let component: EditDieuComponent;
  let fixture: ComponentFixture<EditDieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDieuComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ]

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
