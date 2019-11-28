import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesourceComponent } from './moviesource.component';

describe('MoviesourceComponent', () => {
  let component: MoviesourceComponent;
  let fixture: ComponentFixture<MoviesourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
