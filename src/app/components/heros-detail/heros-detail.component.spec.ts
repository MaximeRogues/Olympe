import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosDetailComponent } from './heros-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


describe('HerosDetailComponent', () => {
  let component: HerosDetailComponent;
  let fixture: ComponentFixture<HerosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosDetailComponent ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        ToastrModule.forRoot()
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
