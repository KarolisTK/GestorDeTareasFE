import { Component, inject, OnInit, signal } from '@angular/core';
import { EspaciosDeTrabajoService } from '../../services/espacios-de-trabajo-service';
import { MostrarEspaciosDeTrabajo } from '../../models/mostrar-espacios-de-trabajo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-espacios-trabajo',
  imports: [],
  templateUrl: './panel-espacios-trabajo.html',
  styleUrl: './panel-espacios-trabajo.css',
})
export class PanelEspaciosTrabajo implements OnInit {
  private espaciosDeTrabajoService = inject(EspaciosDeTrabajoService);
  private router = inject(Router);
  espaciosDeTrabajo = signal<MostrarEspaciosDeTrabajo[]>([]);

  ngOnInit() {
    this.espaciosDeTrabajoService
      .obtenerEspaciosDeTrabajo()
      .subscribe((data) => this.espaciosDeTrabajo.set(data));
  }

  seleccionarEspacio(id: number) {
    this.router.navigate(['/workspace'], { queryParams: { id } });
  }
}
