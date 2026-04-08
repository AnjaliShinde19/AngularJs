import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { nestedChildGuardGuard } from './nested-child-guard-guard';

describe('nestedChildGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => nestedChildGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
