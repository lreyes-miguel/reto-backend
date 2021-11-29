import {MockApiVehicleRepository} from "../src/Infrastructure/mock/MockApiVehicleRepository";

describe('VehicleHandler', () => {

    it('Should find an existing vehicle', async () => {
        const mockVehicle = new MockApiVehicleRepository();
        const mockVehicleData = await mockVehicle.find(1);
        expect(mockVehicleData).toEqual({
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
        });
    });
})

