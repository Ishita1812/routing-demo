import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { courseGuard } from './course.guard';

describe('courseGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => courseGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
