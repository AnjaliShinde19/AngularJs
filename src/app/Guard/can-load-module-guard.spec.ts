import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { cAnLoadModuleGuard } from './can-load-module-guard';

describe('cAnLoadModuleGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => cAnLoadModuleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
