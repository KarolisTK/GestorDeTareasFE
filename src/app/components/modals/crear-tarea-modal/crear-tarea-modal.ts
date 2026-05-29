import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../../services/tareas-service';
import { CrearTarea } from '../../../models/crear-Tarea';
import { CrearTareaUrgente } from '../../../models/crear-tarea-urgente';

@Component({
  selector: 'app-crear-tarea-modal',
  imports: [FormsModule],
  templateUrl: './crear-tarea-modal.html',
})
export class CrearTareaModalComponent {
  idEspacioDeTrabajo = input.required<number>();

  cerrar       = output<void>();
  tareaCreada  = output<void>();

  nombreTarea      = '';
  descripcionTarea = '';
  conPrioridad = signal(false);
  cargando         = false;
  fechaLimite = signal('');
  error            = '';

  private tareaService = inject(TareasService);

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.cerrar.emit();
    }
  }

  onSubmit() {
    if (!this.nombreTarea.trim()) {
      this.error = 'El nombre de la tarea es obligatorio.';
      return;
    }

    this.cargando = true;
    this.error    = '';

    const dto: CrearTarea = {
      nombreTarea:        this.nombreTarea.trim(),
      descripcionTarea:   this.descripcionTarea.trim(),
      fechaCreacionTarea: new Date(),
      estadosTarea:       0,
      estaEliminado:      false,
      tiposTarea:         0,
      idEspacioDeTrabajo: this.idEspacioDeTrabajo(),
    };

    this.tareaService.AniadirNuevaTarea(dto).subscribe({
      next: () => {
        this.cargando = false;
        this.tareaCreada.emit();
        this.cerrar.emit();
      },
      error: (err) => {
        this.cargando = false;
        this.error    = 'Error al crear la tarea. Inténtalo de nuevo.';
        console.error(err);
      },
    });
  }

  CrearTareaUrgente(){
    const dto: CrearTareaUrgente  = {
      nombreTarea:        this.nombreTarea.trim(),
      descripcionTarea:   this.descripcionTarea.trim(),
      fechaCreacionTarea: new Date(),
      fechaLimite:        new Date(this.fechaLimite()),
      tienePrioridad:     true,
      estadosTarea:       0,
      estaEliminado:      false,
      tiposTarea:         0,
      idEspacioDeTrabajo: this.idEspacioDeTrabajo(),
    };

    this.tareaService.CrearTareaUrgente(dto).subscribe({
      next:() =>{
        this.tareaCreada.emit();
        this.cerrar.emit();
      }
    })
  }
}
