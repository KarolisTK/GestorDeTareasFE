import { Component, computed, inject, signal } from '@angular/core';
import { TareaCard } from '../tarea-card/tarea-card';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../../services/tareas-service';
import { ObtenerTareas } from '../../models/obtener-tareas';
import { CrearTareaModalComponent } from '../modals/crear-tarea-modal/crear-tarea-modal';

@Component({
  selector: 'app-espacio-de-trabajo',
  imports: [TareaCard, CrearTareaModalComponent],
  templateUrl: './espacio-de-trabajo.html',
  styleUrl: './espacio-de-trabajo.css',
})
export class EspacioDeTrabajo {
  private route = inject(ActivatedRoute);
  private tareasService = inject(TareasService);

  tareas = signal<ObtenerTareas[]>([]);
  modalAbierto = signal(false);
  idEspacio = signal(0);

  ngOnInit() {
    const id = Number(this.route.snapshot.queryParamMap.get('id'));
    this.idEspacio.set(id);
    this.tareasService.obtenerTodasLasTareas(id).subscribe((data) => this.tareas.set(data));
  }

  abrirModal() { this.modalAbierto.set(true); }
  cerrarModal() { this.modalAbierto.set(false); }

  onTareaCreada() {
    this.tareasService
      .obtenerTodasLasTareas(this.idEspacio())
      .subscribe((data) => this.tareas.set(data));
  }

  porEmpezar = computed(() => this.tareas().filter((t) => t.estadosTarea === 0).length);
  enProgreso = computed(() => this.tareas().filter((t) => t.estadosTarea === 1).length);
  completadas = computed(() => this.tareas().filter((t) => t.estadosTarea === 3).length);
}