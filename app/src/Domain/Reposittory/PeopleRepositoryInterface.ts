import {PeopleEntity} from "../Entity/PeopleEntity";

export interface PeopleRepositoryInterface {
    find(peopleId): Promise<PeopleEntity>;
}