import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObtenerTareas } from '../../models/obtener-tareas';
import { EditarTareaModal } from '../modals/editar-tarea-modal/editar-tarea-modal';
import { TareasService } from '../../services/tareas-service';

@Component({
  selector: 'app-tarea-card',
  imports: [EditarTareaModal, FormsModule],
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
  tarea = input.required<ObtenerTareas>();

  tareaEditada   = output<void>();
  tareaEliminada = output<void>();

  modalEditarAbierto = signal(false);

  private tareasService = inject(TareasService);

  cambiarEstado(nuevoEstado: number) {
    const t = this.tarea();
    this.tareasService.EditarTarea(
      {
        nombreTarea:        t.nombreTarea,
        descripcionTarea:   t.descripcionTarea,
        estadosTarea:       nuevoEstado,
        tiposTarea:         t.tiposTarea,
        idUsuarioDeLaTarea: t.idUsuarioDeLaTarea,
      },
      t.idTarea
    ).subscribe({ next: () => this.tareaEditada.emit() });
  }
}