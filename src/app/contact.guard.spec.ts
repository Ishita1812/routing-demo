import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { contactGuard } from './contact.guard';

describe('contactGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => contactGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
