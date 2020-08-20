
import { AddDieuxComponent } from './add-dieux.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';


describe('AddDieuxComponent', () => {
  let component: AddDieuxComponent;
  let fixture: ComponentFixture<AddDieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDieuxComponent ],
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
    fixture = TestBed.createComponent(AddDieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
