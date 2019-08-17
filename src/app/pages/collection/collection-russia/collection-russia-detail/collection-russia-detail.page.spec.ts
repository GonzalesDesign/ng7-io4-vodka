import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRussiaDetailPage } from './collection-russia-detail.page';

describe('CollectionRussiaDetailPage', () => {
  let component: CollectionRussiaDetailPage;
  let fixture: ComponentFixture<CollectionRussiaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionRussiaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionRussiaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
