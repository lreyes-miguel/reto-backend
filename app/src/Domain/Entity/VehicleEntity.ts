export class VehicleEntity {
    readonly id: string | undefined;
    readonly nombre: string;
    readonly modelo: string;
    readonly clase: string;
    readonly fabricante: string;
    readonly longitud: string;
    readonly costoCredito: string;
    readonly cantidadPilotos: string;
    readonly pasajeros: string;
    readonly velocidadMaxima: string;
    readonly capacidadCarga: string;
    readonly tiempoConsumibles: string;
    readonly peliculas: [];
    readonly pilotos: [];
    readonly fechaCreacion: string | undefined;
    readonly fechaEdicion: string | undefined;

    constructor(
        {id, nombre, modelo, clase, fabricante, longitud, costoCredito, cantidadPilotos, pasajeros, velocidadMaxima, capacidadCarga, tiempoConsumibles, peliculas, pilotos, fechaCreacion, fechaEdicion}: { id?: string, nombre: string, modelo: string, clase: string, fabricante: string, longitud: string, costoCredito: string, cantidadPilotos: string, pasajeros: string, velocidadMaxima: string, capacidadCarga: string, tiempoConsumibles: string, peliculas: [], pilotos: [], fechaCreacion?: string, fechaEdicion?: string }
    ) {
        this.id = id;
        this.nombre = nombre;
        this.modelo = modelo;
        this.clase = clase;
        this.fabricante = fabricante;
        this.longitud = longitud;
        this.costoCredito = costoCredito;
        this.cantidadPilotos = cantidadPilotos;
        this.pasajeros = pasajeros;
        this.velocidadMaxima = velocidadMaxima;
        this.capacidadCarga = capacidadCarga;
        this.tiempoConsumibles = tiempoConsumibles;
        this.peliculas = peliculas;
        this.pilotos = pilotos;
        // this.fechaCreacion = new Date(new Date().getTime() + -5 * 3600 * 1000).toISOString();
        this.fechaCreacion = fechaCreacion;
        this.fechaEdicion = fechaEdicion;
    }

    static fromPrimitives(plainData): VehicleEntity {
        return new VehicleEntity(
            {
                id: plainData.id,
                nombre: plainData.nombre,
                modelo: plainData.modelo,
                clase: plainData.clase,
                fabricante: plainData.fabricante,
                longitud: plainData.longitud,
                costoCredito: plainData.costoCredito,
                cantidadPilotos: plainData.cantidadPilotos,
                pasajeros: plainData.pasajeros,
                velocidadMaxima: plainData.velocidadMaxima,
                capacidadCarga: plainData.capacidadCarga,
                tiempoConsumibles: plainData.tiempoConsumibles,
                peliculas: plainData.peliculas,
                pilotos: plainData.pilotos,
                fechaCreacion: plainData.fechaCreacion,
                fechaEdicion: plainData.fechaEdicion
            }
        );
    }
}