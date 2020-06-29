import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuxComponent } from './dieux.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('DieuxComponent', () => {
  let component: DieuxComponent;
  let fixture: ComponentFixture<DieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuxComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
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
