import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialAnimationComponent } from './initial-animation.component';

describe('InitialAnimationComponent', () => {
  let component: InitialAnimationComponent;
  let fixture: ComponentFixture<InitialAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
