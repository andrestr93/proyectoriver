import { TestBed } from '@angular/core/testing';
import {PeticionService} from './peticiones.service';

describe('PeticionesService', () => {
  let service: PeticionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
