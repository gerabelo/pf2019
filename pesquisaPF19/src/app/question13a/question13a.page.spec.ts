import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question13aPage } from './question13a.page';

describe('Question13aPage', () => {
  let component: Question13aPage;
  let fixture: ComponentFixture<Question13aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question13aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question13aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
