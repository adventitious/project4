import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingredient2Component } from './ingredient2.component';

describe('Ingredient2Component', () => {
  let component: Ingredient2Component;
  let fixture: ComponentFixture<Ingredient2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ingredient2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ingredient2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
