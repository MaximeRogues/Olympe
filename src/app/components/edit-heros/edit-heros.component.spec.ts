import {HttpClientTestingModule} from '@angular/common/http/testing/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHerosComponent } from './edit-heros.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditHerosComponent', () => {
  let component: EditHerosComponent;
  let fixture: ComponentFixture<EditHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHerosComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
        ],
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
