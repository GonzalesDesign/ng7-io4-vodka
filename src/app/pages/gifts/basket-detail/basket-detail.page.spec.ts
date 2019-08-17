import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketDetailPage } from './basket-detail.page';

describe('BasketDetailPage', () => {
  let component: BasketDetailPage;
  let fixture: ComponentFixture<BasketDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
