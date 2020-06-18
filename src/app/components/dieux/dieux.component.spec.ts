import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuxComponent } from './dieux.component';

describe('DieuxComponent', () => {
  let component: DieuxComponent;
  let fixture: ComponentFixture<DieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuxComponent ]
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
