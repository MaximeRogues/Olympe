import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstresComponent } from './monstres.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


describe('MonstresComponent', () => {
  let component: MonstresComponent;
  let fixture: ComponentFixture<MonstresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstresComponent ],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
