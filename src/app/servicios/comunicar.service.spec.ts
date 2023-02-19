import { TestBed } from '@angular/core/testing';

import { ComunicarService } from './comunicar.service';

describe('ComunicarService', () => {
  let service: ComunicarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
