import { TestBed, async, inject } from '@angular/core/testing';

import { CharacterResolveGuard } from './character-resolve.guard';

describe('CharacterResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterResolveGuard]
    });
  });

  it('should ...', inject([CharacterResolveGuard], (guard: CharacterResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
