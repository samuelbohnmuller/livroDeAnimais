import { TestBed } from '@angular/core/testing';

import { ExisteService } from './existe.service';

describe('ExisteService', () => {
  let service: ExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
