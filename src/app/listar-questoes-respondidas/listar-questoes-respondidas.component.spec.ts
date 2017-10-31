import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuestoesRespondidasComponent } from './listar-questoes-respondidas.component';

describe('ListarQuestoesRespondidasComponent', () => {
  let component: ListarQuestoesRespondidasComponent;
  let fixture: ComponentFixture<ListarQuestoesRespondidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarQuestoesRespondidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarQuestoesRespondidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
