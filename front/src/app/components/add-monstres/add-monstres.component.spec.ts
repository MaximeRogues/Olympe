import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonstresComponent } from './add-monstres.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';



describe('AddMonstresComponent', () => {
  let component: AddMonstresComponent;
  let fixture: ComponentFixture<AddMonstresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonstresComponent ],
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
    fixture = TestBed.createComponent(AddMonstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
