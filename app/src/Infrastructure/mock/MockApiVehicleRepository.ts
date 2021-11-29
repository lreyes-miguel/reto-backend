import 'reflect-metadata';
import {injectable} from "inversify";
import {VehicleRepositoryInterface} from "../../Domain/Reposittory/VehicleRepositoryInterface";
import {VehicleEntity} from "../../Domain/Entity/VehicleEntity";

@injectable()
export class MockApiVehicleRepository implements VehicleRepositoryInterface{
    private mockFind = jest.fn();
    private vehicle: VehicleEntity | undefined;
    private data = [
        {
            "id": "d0f91450-50b5-11ec-be10-955b11f5a865",
            "nombre": "Sand Crawler",
            "modelo": "Digger Crawler",
            "clase": "wheeled",
            "fabricante": "Corellia Mining Corporation",
            "longitud": "36.8",
            "costoCredito": "150000",
            "cantidadPilotos": "46",
            "pasajeros": "30",
            "velocidadMaxima": "30",
            "capacidadCarga": "50000",
            "tiempoConsumibles": "2 Months",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/"
            ],
            "pilotos": [],
            "fechaCreacion": "2021-11-28T20:44:22.383Z"
        }
    ];

    async find(vehicleId): Promise<VehicleEntity> {
        await this.mockFind();
        return VehicleEntity.fromPrimitives(this.data[0])
    }

    async save(vehicle: VehicleEntity): Promise<any> {

    }

    assertFind() {
        expect(this.mockFind).toHaveBeenCalled();
    }
}