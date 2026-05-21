export interface ObtenerTareas {
    idTarea: number,
    nombreTarea: string,
    descripcionTarea: string,
    fechaCreacionTarea: Date,
    estadosTarea: number,
    estaEliminado: boolean,
    tiposTarea: number,
    idUsuarioDeLaTarea: number,
    espacioDeTrabajoId: number
}
