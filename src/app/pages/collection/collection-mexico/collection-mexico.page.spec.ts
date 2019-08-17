import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMexicoPage } from './collection-mexico.page';

describe('CollectionMexicoPage', () => {
  let component: CollectionMexicoPage;
  let fixture: ComponentFixture<CollectionMexicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionMexicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMexicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
