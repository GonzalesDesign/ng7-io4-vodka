import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianDrinksPage } from './russian-drinks.page';

describe('RussianDrinksPage', () => {
  let component: RussianDrinksPage;
  let fixture: ComponentFixture<RussianDrinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RussianDrinksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RussianDrinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
