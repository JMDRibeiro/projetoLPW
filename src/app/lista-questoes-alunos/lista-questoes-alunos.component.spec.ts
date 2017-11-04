import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQuestoesAlunosComponent } from './lista-questoes-alunos.component';

describe('ListaQuestoesAlunosComponent', () => {
  let component: ListaQuestoesAlunosComponent;
  let fixture: ComponentFixture<ListaQuestoesAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaQuestoesAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaQuestoesAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
