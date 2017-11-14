import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTurmaComponent } from './inserir-turma.component';

describe('InserirTurmaComponent', () => {
  let component: InserirTurmaComponent;
  let fixture: ComponentFixture<InserirTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
