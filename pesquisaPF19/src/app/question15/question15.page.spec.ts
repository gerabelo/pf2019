import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question15Page } from './question15.page';

describe('Question15Page', () => {
  let component: Question15Page;
  let fixture: ComponentFixture<Question15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question15Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
