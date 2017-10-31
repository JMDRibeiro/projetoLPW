import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarListasQuestoesComponent } from './listar-listas-questoes.component';

describe('ListarListasQuestoesComponent', () => {
  let component: ListarListasQuestoesComponent;
  let fixture: ComponentFixture<ListarListasQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarListasQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarListasQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
