export interface ObtenerTareas {
    idTarea: number,
    nombreTarea: string,
    descripcionTarea: string,
    fechaCreacionTarea: Date,
    fechaLimite?: Date,
    estadosTarea: number,
    estaEliminado: boolean,
    tienePrioridad?: boolean,
    tiposTarea: number,
    idUsuarioDeLaTarea: number,
    espacioDeTrabajoId: number
}
