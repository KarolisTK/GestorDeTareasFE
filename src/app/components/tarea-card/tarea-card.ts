import { Component, inject, input, OnInit, signal } from '@angular/core';
import { TareasService } from '../../services/tareas-service';
import { ObtenerTareas } from '../../models/obtener-tareas';

@Component({
  selector: 'app-tarea-card',
  imports: [],
  templateUrl: './tarea-card.html',
  styleUrl: './tarea-card.css',
})
export class TareaCard {
tarea = input.required<ObtenerTareas>();
}
