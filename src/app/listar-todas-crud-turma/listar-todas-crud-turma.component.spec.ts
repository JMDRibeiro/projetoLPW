import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodasCrudTurmaComponent } from './listar-todas-crud-turma.component';

describe('ListarTodasCrudTurmaComponent', () => {
  let component: ListarTodasCrudTurmaComponent;
  let fixture: ComponentFixture<ListarTodasCrudTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTodasCrudTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTodasCrudTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
