import { TestBed, inject } from '@angular/core/testing';

import { QuestaoRespondidaService } from './questao-respondida.service';

describe('QuestaoRespondidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestaoRespondidaService]
    });
  });

  it('should be created', inject([QuestaoRespondidaService], (service: QuestaoRespondidaService) => {
    expect(service).toBeTruthy();
  }));
});
