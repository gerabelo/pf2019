import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question14aPage } from './question14a.page';

describe('Question14aPage', () => {
  let component: Question14aPage;
  let fixture: ComponentFixture<Question14aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question14aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question14aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
