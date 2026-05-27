import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAmigosModal } from './listar-amigos-modal';

describe('ListarAmigosModal', () => {
  let component: ListarAmigosModal;
  let fixture: ComponentFixture<ListarAmigosModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAmigosModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarAmigosModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
