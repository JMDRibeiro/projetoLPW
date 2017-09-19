import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteprimeComponent } from './testeprime.component';

describe('TesteprimeComponent', () => {
  let component: TesteprimeComponent;
  let fixture: ComponentFixture<TesteprimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteprimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
