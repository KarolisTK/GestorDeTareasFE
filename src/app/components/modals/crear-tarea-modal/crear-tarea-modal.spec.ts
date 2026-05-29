import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTareaModal } from './crear-tarea-modal';

describe('CrearTareaModal', () => {
  let component: CrearTareaModal;
  let fixture: ComponentFixture<CrearTareaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTareaModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearTareaModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
