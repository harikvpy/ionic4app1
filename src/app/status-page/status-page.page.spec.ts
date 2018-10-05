import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPagePage } from './status-page.page';

describe('StatusPagePage', () => {
  let component: StatusPagePage;
  let fixture: ComponentFixture<StatusPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
