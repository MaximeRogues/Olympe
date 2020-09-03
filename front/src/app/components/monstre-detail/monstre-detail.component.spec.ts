import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstreDetailComponent } from './monstre-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('MonstreDetailComponent', () => {
  let component: MonstreDetailComponent;
  let fixture: ComponentFixture<MonstreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstreDetailComponent ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        ToastrModule.forRoot()
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
