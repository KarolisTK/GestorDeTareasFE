import { Component, inject, OnInit, signal } from '@angular/core';
import { EspaciosDeTrabajoService } from '../../services/espacios-de-trabajo-service';
import { MostrarEspaciosDeTrabajo } from '../../models/mostrar-espacios-de-trabajo';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CrearNuevoEspacioDeTrabajo } from '../../models/crear-nuevo-espacio-de-trabajo';

@Component({
  selector: 'app-panel-espacios-trabajo',
  imports: [FormsModule],
  templateUrl: './panel-espacios-trabajo.html',
  styleUrl: './panel-espacios-trabajo.css',
})
export class PanelEspaciosTrabajo implements OnInit {
  private espaciosDeTrabajoService = inject(EspaciosDeTrabajoService);
  private router = inject(Router);
  espaciosDeTrabajo = signal<MostrarEspaciosDeTrabajo[]>([]);
  nombreEspacioTrabajo = '';

  ngOnInit() {
    this.cargarEspacios();
  }

  cargarEspacios() {
    this.espaciosDeTrabajoService
      .obtenerEspaciosDeTrabajo()
      .subscribe((data) => this.espaciosDeTrabajo.set(data));
  }

  seleccionarEspacio(id: number) {
    this.router.navigate(['/workspace'], { queryParams: { id } });
  }

  onSubmit() {
    const dto: CrearNuevoEspacioDeTrabajo = {
      nombre: this.nombreEspacioTrabajo.trim(),
    };

    this.espaciosDeTrabajoService.crearEspacioDeTrabajo(dto).subscribe({
      next: () => {
        this.nombreEspacioTrabajo = '';
        this.cargarEspacios();
      },
    });
  }
}
