import { RequestAdapter } from '../adapter/rest/request'
import {inject, injectable} from "inversify";
import {TYPES} from "../../Type";
import {PeopleRepositoryInterface} from "../../Domain/Reposittory/PeopleRepositoryInterface";
import {PeopleEntity} from "../../Domain/Entity/PeopleEntity";

@injectable()
export class ApiPeopleRepository implements PeopleRepositoryInterface{
    constructor(@inject(TYPES.Request) private request: RequestAdapter) {}


    public async find(peopleId): Promise<PeopleEntity> {
        console.log(process.env.API_PEOPLE)
        const response  = await this.request.get(process.env.API_PEOPLE + peopleId)
        return PeopleEntity.fromPrimitives(response.data)
    }
}