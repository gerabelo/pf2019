import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question12Page } from './question12.page';

describe('Question12Page', () => {
  let component: Question12Page;
  let fixture: ComponentFixture<Question12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
