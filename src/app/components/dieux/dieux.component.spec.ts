import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuxComponent } from './dieux.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('DieuxComponent', () => {
  let component: DieuxComponent;
  let fixture: ComponentFixture<DieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuxComponent ],
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
