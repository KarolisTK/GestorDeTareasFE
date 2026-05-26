import { CrearTarea } from './crear-Tarea';

export interface CrearTareaUrgente extends CrearTarea {
  tienePrioridad:   boolean;
  fechaLimite: Date;
}