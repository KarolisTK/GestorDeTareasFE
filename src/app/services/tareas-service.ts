import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ObtenerTareas } from '../models/obtener-tareas';
import { CrearTarea } from '../models/crear-Tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:44380/api';

  obtenerTodasLasTareas(idEspacioDeTrabajo: number) {
    return this.http.get<ObtenerTareas[]>(
      `${this.baseUrl}/Tareas/ObtenerTodasLasTareas/${idEspacioDeTrabajo}`,
    );
  }

  AniadirNuevaTarea(dto: CrearTarea): Observable<any> {
  return this.http.post(`${this.baseUrl}/Tareas/CrearTarea`, dto);
}
}
