import { TestBed } from '@angular/core/testing';

import { MediaQueriesService } from './media-queries.service';

describe('MediaQueriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaQueriesService = TestBed.get(MediaQueriesService);
    expect(service).toBeTruthy();
  });
});
