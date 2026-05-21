import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../../services/tareas-service';
import { CrearTarea } from '../../../models/crear-Tarea';

@Component({
  selector: 'app-crear-tarea-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-tarea-modal.html',
})
export class CrearTareaModalComponent implements OnInit {
  @Input() idEspacioDeTrabajo!: number;
  @Output() cerrar = new EventEmitter<void>();
  @Output() tareaCreada = new EventEmitter<void>();

  nombreTarea = '';
  descripcionTarea = '';
  cargando = false;
  error = '';

  constructor(private tareaService: TareasService) {}

  ngOnInit() {}

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
    this.error = '';

    const dto: CrearTarea = {
      nombreTarea: this.nombreTarea.trim(),
      descripcionTarea: this.descripcionTarea.trim(),
      fechaCreacionTarea: new Date(),
      estadosTarea: 0,
      estaEliminado: false,
      tiposTarea: 0,
      idEspacioDeTrabajo: this.idEspacioDeTrabajo,
    };

    this.tareaService.AniadirNuevaTarea(dto).subscribe({
      next: () => {
        this.cargando = false;
        this.tareaCreada.emit();
        this.cerrar.emit();
      },
      error: (err) => {
        this.cargando = false;
        this.error = 'Error al crear la tarea. Inténtalo de nuevo.';
        console.error(err);
      },
    });
  }
}