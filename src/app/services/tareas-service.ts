import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ObtenerTareas } from '../models/obtener-tareas';
import { CrearTarea } from '../models/crear-Tarea';
import { Observable } from 'rxjs';
import { EditarTarea } from '../models/editar-tarea';
import { CrearTareaUrgente } from '../models/crear-tarea-urgente';

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
  EditarTarea(dto: EditarTarea, idTarea: number) {
    return this.http.put(`${this.baseUrl}/Tareas/EditarTarea/${idTarea}`, dto);
  }
  EliminarTarea(idTarea: number) {
    return this.http.delete(`${this.baseUrl}/Tareas/EliminarTarea/${idTarea}`);
  }
  PriorizarTarea(dto: CrearTareaUrgente, idTarea: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/TareasUrgentes/PriorizarTarea/${idTarea}`, dto);
  }
  QuitarPrioridad(dto: CrearTareaUrgente, idTarea: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/TareasUrgentes/QuitarPrioridad/${idTarea}`, dto);
  }
  CrearTareaUrgente(dto: CrearTareaUrgente): Observable<any> {
    return this.http.post(`${this.baseUrl}/TareasUrgentes/CrearTareaUrgente`, dto);
  }
}
