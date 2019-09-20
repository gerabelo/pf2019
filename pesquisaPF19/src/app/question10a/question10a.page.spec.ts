import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question10aPage } from './question10a.page';

describe('Question10aPage', () => {
  let component: Question10aPage;
  let fixture: ComponentFixture<Question10aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question10aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question10aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
