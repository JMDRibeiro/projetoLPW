import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarTagsComponent } from './gerenciar-tags.component';

describe('GerenciarTagsComponent', () => {
  let component: GerenciarTagsComponent;
  let fixture: ComponentFixture<GerenciarTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
