import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuDetailComponent } from './dieu-detail.component';

describe('DieuDetailComponent', () => {
  let component: DieuDetailComponent;
  let fixture: ComponentFixture<DieuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuDetailComponent ]
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
