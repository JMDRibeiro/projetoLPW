import { TestBed, inject } from '@angular/core/testing';

import { ListaQuestoesService } from './lista-questoes.service';

describe('ListaQuestoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaQuestoesService]
    });
  });

  it('should be created', inject([ListaQuestoesService], (service: ListaQuestoesService) => {
    expect(service).toBeTruthy();
  }));
});
