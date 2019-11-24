import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsInformationComponent } from './skills-information.component';

describe('SkillsInformationComponent', () => {
  let component: SkillsInformationComponent;
  let fixture: ComponentFixture<SkillsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
