import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailPage } from './collection-detail.page';

describe('CollectionDetailPage', () => {
  let component: CollectionDetailPage;
  let fixture: ComponentFixture<CollectionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
