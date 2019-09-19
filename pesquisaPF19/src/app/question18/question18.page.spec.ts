import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question18Page } from './question18.page';

describe('Question18Page', () => {
  let component: Question18Page;
  let fixture: ComponentFixture<Question18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question18Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
