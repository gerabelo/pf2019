import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question11aPage } from './question11a.page';

describe('Question11aPage', () => {
  let component: Question11aPage;
  let fixture: ComponentFixture<Question11aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question11aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question11aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
