import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarListasAlunosComponent } from './listar-listas-alunos.component';

describe('ListarListasAlunosComponent', () => {
  let component: ListarListasAlunosComponent;
  let fixture: ComponentFixture<ListarListasAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarListasAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarListasAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
