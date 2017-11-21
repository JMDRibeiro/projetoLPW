import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDadosAlunosComponent } from './listar-dados-alunos.component';

describe('ListarDadosAlunosComponent', () => {
  let component: ListarDadosAlunosComponent;
  let fixture: ComponentFixture<ListarDadosAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDadosAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDadosAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
