import { TestBed, inject } from '@angular/core/testing';

import { RecipieService } from './recipie.service';

describe('RecipieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipieService]
    });
  });

  it('should ...', inject([RecipieService], (service: RecipieService) => {
    expect(service).toBeTruthy();
  }));
});
