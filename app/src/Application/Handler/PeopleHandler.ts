import container from "../../main";
import {TYPES} from "../../Type";
import {PeopleAppService} from "../services/PeopleAppService";

export const getPeople = async event => {
    try {
        const PeopleService = container.get<PeopleAppService>(TYPES.PeopleRepository);
        const people = await PeopleService.find(event.pathParameters.peopleId)
        return {
            statusCode: 200,
            body: JSON.stringify(people)
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