import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCvComponent } from './load-cv.component';

describe('LoadCvComponent', () => {
  let component: LoadCvComponent;
  let fixture: ComponentFixture<LoadCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
