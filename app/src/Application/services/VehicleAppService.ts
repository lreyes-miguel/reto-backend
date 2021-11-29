import {inject, injectable} from "inversify";
import {TYPES} from "../../Type";
import {VehicleDomainService} from "../../Domain/services/VehicleDomainService";
import {VehicleEntity} from "../../Domain/Entity/VehicleEntity";

@injectable()
export class VehicleAppService {
    constructor(@inject(TYPES.VehicleDomainService) private service: VehicleDomainService) {
    }

    public async find(vehicleId: string) {
        return await this.service.find(vehicleId);
    }

    public async save(vehicle) {
        const vehicleEntity = new VehicleEntity({
            id: undefined,
            nombre: vehicle.nombre,
            modelo: vehicle.modelo,
            clase: vehicle.clase,
            fabricante: vehicle.fabricante,
            longitud: vehicle.longitud,
            costoCredito: vehicle.costoCredito,
            cantidadPilotos: vehicle.cantidadPilotos,
            pasajeros: vehicle.pasajeros,
            velocidadMaxima: vehicle.velocidadMaxima,
            capacidadCarga: vehicle.capacidadCarga,
            tiempoConsumibles: vehicle.tiempoConsumibles,
            peliculas: vehicle.peliculas,
            pilotos: vehicle.pilotos
        });
        return await this.service.save(vehicleEntity);
    }

}