import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasQuestoesCrudComponent } from './listas-questoes-crud.component';

describe('ListasQuestoesCrudComponent', () => {
  let component: ListasQuestoesCrudComponent;
  let fixture: ComponentFixture<ListasQuestoesCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasQuestoesCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasQuestoesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
