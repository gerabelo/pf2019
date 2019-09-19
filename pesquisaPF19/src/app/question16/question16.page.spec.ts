import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question16Page } from './question16.page';

describe('Question16Page', () => {
  let component: Question16Page;
  let fixture: ComponentFixture<Question16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question16Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
