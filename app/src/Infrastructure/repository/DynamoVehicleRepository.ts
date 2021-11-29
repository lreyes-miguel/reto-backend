import {VehicleRepositoryInterface} from "../../Domain/Reposittory/VehicleRepositoryInterface";
import {inject, injectable} from "inversify";
import {VehicleEntity} from "../../Domain/Entity/VehicleEntity";
import * as aws from "aws-sdk";
import * as uuid from "uuid";

@injectable()
export class DynamoVehicleRepository implements VehicleRepositoryInterface {

    private client;

    private getClient() {
        this.client = new aws.DynamoDB.DocumentClient();
        return this.client;
    }

    public async find(vehicleId): Promise<VehicleEntity> {
        const params = {
            TableName: process.env.PEOPLE_TABLE,
            Key: { id: String(vehicleId) }
        }
        const response = await this.getClient().get(params).promise();
        return VehicleEntity.fromPrimitives(response.Item);
    }

    public async save(vehicle: VehicleEntity): Promise<any> {
        const id = String(uuid.v1());
        const item = {...vehicle,
            id: id
        }
        const params = {
            Item: item,
            TableName: process.env.PEOPLE_TABLE
        }
        await this.getClient().put(params).promise()
        return {id: id};
    }
}