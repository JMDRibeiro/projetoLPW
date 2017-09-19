import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigirQuestoesComponent } from './corrigir-questoes.component';

describe('CorrigirQuestoesComponent', () => {
  let component: CorrigirQuestoesComponent;
  let fixture: ComponentFixture<CorrigirQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrigirQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigirQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
