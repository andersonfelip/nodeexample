import { TestBed } from '@angular/core/testing';

import { SemaforoService } from './semaforo.service';

describe('SemaforoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemaforoService = TestBed.get(SemaforoService);
    expect(service).toBeTruthy();
  });
});
