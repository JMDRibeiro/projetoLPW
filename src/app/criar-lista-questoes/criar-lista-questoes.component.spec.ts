import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarListaQuestoesComponent } from './criar-lista-questoes.component';

describe('CriarListaQuestoesComponent', () => {
  let component: CriarListaQuestoesComponent;
  let fixture: ComponentFixture<CriarListaQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarListaQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarListaQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
