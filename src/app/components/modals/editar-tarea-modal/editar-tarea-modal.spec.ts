import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTareaModal } from './editar-tarea-modal';

describe('EditarTareaModal', () => {
  let component: EditarTareaModal;
  let fixture: ComponentFixture<EditarTareaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTareaModal],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTareaModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
