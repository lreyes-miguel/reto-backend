import {inject, injectable} from "inversify";
import {PeopleDomainService} from "../../Domain/services/PeopleDomainService";
import {TYPES} from "../../Type";

@injectable()
export class PeopleAppService {
    constructor(@inject(TYPES.PeopleDomainService) private service: PeopleDomainService)
    {}

    public async find(peopleId) {
        return await this.service.find(peopleId);
    }
}