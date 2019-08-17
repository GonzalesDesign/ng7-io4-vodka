import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDetailPage } from './cocktail-detail.page';

describe('CocktailDetailPage', () => {
  let component: CocktailDetailPage;
  let fixture: ComponentFixture<CocktailDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
