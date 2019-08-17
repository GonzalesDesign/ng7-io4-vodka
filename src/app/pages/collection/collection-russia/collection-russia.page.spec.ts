import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRussiaPage } from './collection-russia.page';

describe('CollectionRussiaPage', () => {
  let component: CollectionRussiaPage;
  let fixture: ComponentFixture<CollectionRussiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionRussiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionRussiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
