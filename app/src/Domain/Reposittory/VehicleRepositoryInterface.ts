import {VehicleEntity} from "../Entity/VehicleEntity";

export interface VehicleRepositoryInterface {
    find(vehicleId): Promise<VehicleEntity>;

    save(vehicle: VehicleEntity): Promise<any>;
}