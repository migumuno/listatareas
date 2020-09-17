import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadetareaComponent } from './listadetarea.component';

describe('ListadetareaComponent', () => {
  let component: ListadetareaComponent;
  let fixture: ComponentFixture<ListadetareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadetareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadetareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
