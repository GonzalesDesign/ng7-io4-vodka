import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFinlandPage } from './collection-finland.page';

describe('CollectionFinlandPage', () => {
  let component: CollectionFinlandPage;
  let fixture: ComponentFixture<CollectionFinlandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionFinlandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFinlandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
