import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAlunoComponent } from './dados-aluno.component';

describe('DadosAlunoComponent', () => {
  let component: DadosAlunoComponent;
  let fixture: ComponentFixture<DadosAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
