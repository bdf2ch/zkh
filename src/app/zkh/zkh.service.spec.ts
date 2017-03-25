/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZkhService } from './zkh.service';

describe('ZkhService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZkhService]
    });
  });

  it('should ...', inject([ZkhService], (service: ZkhService) => {
    expect(service).toBeTruthy();
  }));
});
