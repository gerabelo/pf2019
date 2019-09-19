import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question8aPage } from './question8a.page';

describe('Question8aPage', () => {
  let component: Question8aPage;
  let fixture: ComponentFixture<Question8aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question8aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question8aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
