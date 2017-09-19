import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQuestoesComponent } from './lista-questoes.component';

describe('ListaQuestoesComponent', () => {
  let component: ListaQuestoesComponent;
  let fixture: ComponentFixture<ListaQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
