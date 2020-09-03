import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHerosComponent } from './add-heros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';


describe('AddHerosComponent', () => {
  let component: AddHerosComponent;
  let fixture: ComponentFixture<AddHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHerosComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
      ]
      
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
