import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question14Page } from './question14.page';

describe('Question14Page', () => {
  let component: Question14Page;
  let fixture: ComponentFixture<Question14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
