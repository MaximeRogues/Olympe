import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDieuComponent } from './edit-dieu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('EditDieuComponent', () => {
  let component: EditDieuComponent;
  let fixture: ComponentFixture<EditDieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDieuComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
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
