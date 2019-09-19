import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question17Page } from './question17.page';

describe('Question17Page', () => {
  let component: Question17Page;
  let fixture: ComponentFixture<Question17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question17Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
