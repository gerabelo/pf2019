import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question11Page } from './question11.page';

describe('Question11Page', () => {
  let component: Question11Page;
  let fixture: ComponentFixture<Question11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
