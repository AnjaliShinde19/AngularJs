import { TestBed } from '@angular/core/testing';

import { UserJsonPlaceHolderAPI } from './user-json-place-holder-api';

describe('UserJsonPlaceHolderAPI', () => {
  let service: UserJsonPlaceHolderAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserJsonPlaceHolderAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
