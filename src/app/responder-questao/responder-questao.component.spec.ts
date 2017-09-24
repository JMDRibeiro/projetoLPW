import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderQuestaoComponent } from './responder-questao.component';

describe('ResponderQuestaoComponent', () => {
  let component: ResponderQuestaoComponent;
  let fixture: ComponentFixture<ResponderQuestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderQuestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
