import { TestBed } from '@angular/core/testing';

import { Postagens } from './postagens';

describe('Postagens', () => {
  let service: Postagens;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Postagens);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
