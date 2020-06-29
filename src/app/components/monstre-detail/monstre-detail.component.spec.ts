import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstreDetailComponent } from './monstre-detail.component';

describe('MonstreDetailComponent', () => {
  let component: MonstreDetailComponent;
  let fixture: ComponentFixture<MonstreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstreDetailComponent ],

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
