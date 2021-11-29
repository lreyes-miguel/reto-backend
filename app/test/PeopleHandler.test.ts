import {MockApiPeopleRepository} from "../src/Infrastructure/mock/MockApiPeopleRepository";

describe('PeopleHandler', () => {

    it('Should find an existing people', async () => {
        const mockPeople = new MockApiPeopleRepository();
        const mockPeopleData = await mockPeople.find(1);
        expect(mockPeopleData).toEqual({
            "nombre": "Beru Whitesun lars",
            "fechaNacimiento": "47BBY",
            "colorOjo": "blue",
            "sexo": "female",
            "colorCabello": "brown",
            "altura": "165",
            "peso": "75",
            "colorPiel": "light",
            "planeta": "https://swapi.py4e.com/api/planets/1/",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "especies": [
                "https://swapi.py4e.com/api/species/1/"
            ],
            "naves": [],
            "vehiculos": [],
            "url": null,
            "fechaCreacion": "2014-12-10T15:53:41.121000Z",
            "fechaEdicion": "2014-12-20T21:17:50.319000Z"
        });
    });
})

