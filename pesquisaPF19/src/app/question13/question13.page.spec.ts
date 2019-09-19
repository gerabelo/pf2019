import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question13Page } from './question13.page';

describe('Question13Page', () => {
  let component: Question13Page;
  let fixture: ComponentFixture<Question13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
