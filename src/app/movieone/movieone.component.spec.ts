import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieoneComponent } from './movieone.component';

describe('MovieoneComponent', () => {
  let component: MovieoneComponent;
  let fixture: ComponentFixture<MovieoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
