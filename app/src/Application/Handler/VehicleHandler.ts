import {VehicleAppService} from "../services/VehicleAppService";
import container from "../../main";
import {TYPES} from "../../Type";

module.exports.saveVehicle = async event => {
    try {
        const vehicleService = container.get<VehicleAppService>(TYPES.VehicleAppService);
        const vehicle = await vehicleService.save(JSON.parse(event.body));
        return {
            statusCode: 200,
            body: JSON.stringify(vehicle)
        };
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: true,
                message: error.message
            })
        }
    }
}

module.exports.getVehicle = async event => {
    try {
        const vehicleService = container.get<VehicleAppService>(TYPES.VehicleAppService);
        const vehicle = await vehicleService.find(event.pathParameters.vehicleId);
        return {
            statusCode: 200,
            body: JSON.stringify(vehicle)
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: true,
                message: error.message
            })
        }
    }
}