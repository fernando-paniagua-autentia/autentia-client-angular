export interface Share {
    idPropietario:number;
    idUsuario:number;
    importe:number;
    descripcion:string;
    fecha:string;
    usuario: {
        id: number
        nombre: string
    }
}
