import 'reflect-metadata';
import {injectable} from "inversify";
import {PeopleRepositoryInterface} from "../../Domain/Reposittory/PeopleRepositoryInterface";
import {PeopleEntity} from "../../Domain/Entity/PeopleEntity";

@injectable()
export class MockApiPeopleRepository implements PeopleRepositoryInterface{
    private mockFind = jest.fn();
    private people: PeopleEntity | undefined;
    private data = [
        {
            "id": 1,
            "name": "Beru Whitesun lars",
            "birth_year": "47BBY",
            "eye_color": "blue",
            "gender": "female",
            "hair_color": "brown",
            "height": "165",
            "mass": "75",
            "skin_color": "light",
            "homeworld": "https://swapi.py4e.com/api/planets/1/",
            "films": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "species": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "url": null,
            "starships": [],
            "vehicles": [],
            "created": "2014-12-10T15:53:41.121000Z",
            "edited": "2014-12-20T21:17:50.319000Z"
        }
    ];

    async find(peopleId): Promise<PeopleEntity> {
        await this.mockFind();
        return PeopleEntity.fromPrimitives(this.data[0])
    }

    assertFind() {
        expect(this.mockFind).toHaveBeenCalled();
    }
}