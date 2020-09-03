import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuDetailComponent } from './dieu-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


describe('DieuDetailComponent', () => {
  let component: DieuDetailComponent;
  let fixture: ComponentFixture<DieuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuDetailComponent ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        ToastrModule.forRoot()
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
