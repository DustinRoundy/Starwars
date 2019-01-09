import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateContentGuard } from './can-activate-content.guard';

describe('CanActivateContentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateContentGuard]
    });
  });

  it('should ...', inject([CanActivateContentGuard], (guard: CanActivateContentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
