import { Component, EventEmitter, inject, input, Output, signal } from '@angular/core';
import { TareasService } from '../../services/tareas-service';
import { ObtenerTareas } from '../../models/obtener-tareas';
import { EditarTareaModal } from '../modals/editar-tarea-modal/editar-tarea-modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea-card',
  imports: [EditarTareaModal],
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
  tarea = input.required<ObtenerTareas>();
  
  modalEditarAbierto = signal(false);
  @Output() tareaEditada = new EventEmitter<void>();
  abrirModalEditar() {
    this.modalEditarAbierto.set(true);
  }
  cerrarModalEditar() {
    this.modalEditarAbierto.set(false);
  }
  onTareaEditada() {
    this.tareaEditada.emit();
  }
}
