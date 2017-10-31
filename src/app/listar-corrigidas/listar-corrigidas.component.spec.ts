import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCorrigidasComponent } from './listar-corrigidas.component';

describe('ListarCorrigidasComponent', () => {
  let component: ListarCorrigidasComponent;
  let fixture: ComponentFixture<ListarCorrigidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCorrigidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCorrigidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
