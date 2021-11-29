# Serverless Api

Proyecto serverless (AWS Lambda) que utiliza:

- Nodejs(typescript)
- Serverless Framework 2.0
- Dynamodb

Pasos para instalación:


```shell
npm install
serverless deploy
npm test
```

# Api

### People
Integrado con SWAPI https://swapi.py4e.com/
 - url: [GET] /dev/people/{id}
 
 ```shell script
{
    "nombre": "Luke Skywalker",
    "fechaNacimiento": "19BBY",
    "colorOjo": "blue",
    "sexo": "male",
    "colorCabello": "blond",
    "altura": "172",
    "peso": "77",
    "colorPiel": "fair",
    "planeta": "https://swapi.py4e.com/api/planets/1/",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
    ],
    "especies": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "naves": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
    ],
    "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
    ],
    "url": "https://swapi.py4e.com/api/people/1/",
    "fechaCreacion": "2014-12-09T13:50:51.644000Z",
    "fechaEdicion": "2014-12-20T21:17:56.891000Z"
}
```

### Vehicle
 - url: [POST] /dev/vehicles

Trama para el envío
 ```shell script
{
    "nombre": "Sand Crawler",
    "modelo": "Digger Crawler",
    "clase": "wheeled",
    "fabricante": "Corellia Mining Corporation",
    "longitud": "36.8",
    "costoCredito": "150000",
    "cantidadPilotos": "46",
    "pasajeros": "30",
    "velocidadMaxima": "30",
    "capacidadCarga": "50000",
    "tiempoConsumibles": "2 Months",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "pilotos": [],
    "fechaCreacion": "2020-11-29T22:24:23.046Z",
    "fechaEdicion": "2014-12-10T15:36:25.724000Z"
}
```

Respuesta
```shell script
{
    "id": "b69d09e0-3374-11eb-b916-2dc8d9d5d044"
}
```

- [GET] /dev/vehicles/{id}

Respuesta
```shell script
{
    "id": "b69d09e0-3374-11eb-b916-2dc8d9d5d044",
    "nombre": "Luis Reyes",
    "modelo": "Digger Crawler",
    "clase": "wheeled",
    "fabricante": "Corellia Mining Corporation",
    "longitud": "36.8",
    "costoCredito": "150000",
    "cantidadPilotos": "46",
    "pasajeros": "30",
    "velocidadMaxima": "30",
    "capacidadCarga": "50000",
    "tiempoConsumibles": "2 Months",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/1/"
    ],
    "pilotos": [],
    "fechaCreacion": "2020-11-30T20:30:02.435Z"
}
```