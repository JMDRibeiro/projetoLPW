import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertQuestaoComponent } from './insert-questao.component';

describe('InsertQuestaoComponent', () => {
  let component: InsertQuestaoComponent;
  let fixture: ComponentFixture<InsertQuestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertQuestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
