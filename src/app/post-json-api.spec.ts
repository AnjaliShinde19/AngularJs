import { TestBed } from '@angular/core/testing';

import { PostJsonAPI } from './post-json-api';

describe('PostJsonAPI', () => {
  let service: PostJsonAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostJsonAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
