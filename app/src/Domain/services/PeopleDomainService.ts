import {inject, injectable} from "inversify";
import {PeopleRepositoryInterface} from "../Reposittory/PeopleRepositoryInterface";
import {TYPES} from "../../Type";

@injectable()
export class PeopleDomainService {
    constructor(@inject(TYPES.PeopleRepository) private service: PeopleRepositoryInterface)
    {}

    public async find(peopleId) {
        return this.service.find(peopleId);
    }
}