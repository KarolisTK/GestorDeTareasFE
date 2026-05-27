import { Component, inject, input, output, signal } from '@angular/core';
import { ListarAmigos } from '../../../models/listar-amigos';
import { AmigosService } from '../../../services/amigos-service';

@Component({
  selector: 'app-listar-amigos-modal',
  imports: [],
  templateUrl: './listar-amigos-modal.html',
  styleUrl: './listar-amigos-modal.css',
})
export class ListarAmigosModal {
  cerrar = output<void>();
  cargando = false;
  error = '';
  amigos = input.required<ListarAmigos[]>();
  private amigosService = inject(AmigosService);

  onOverlayClick(event: MouseEvent) {
    console.log('target:', (event.target as HTMLElement).className);
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.cerrar.emit();
    }
  }

  MostrarAmigos() {
    this.amigosService.ListarTodosLosAmigos().subscribe({
      next: (res) => {
        if (!res || res.length === 0) {
          this.error = 'No hay solicitudes.';
          return;
        }
      },
    });
  }
}
