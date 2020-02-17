import { TestBed } from '@angular/core/testing';

import { WeblibsComponentsService } from './weblibs-components.service';

describe('WeblibsComponentsService', () => {
  let service: WeblibsComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeblibsComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
