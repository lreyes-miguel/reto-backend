
export class PeopleEntity {
    readonly nombre: string;
    readonly fechaNacimiento: string;
    readonly colorOjo: string;
    readonly sexo: string;
    readonly colorCabello: string;
    readonly altura: string;
    readonly peso: string;
    readonly colorPiel: string;
    readonly planeta: string;
    readonly peliculas: [];
    readonly especies: [];
    readonly naves: [];
    readonly vehiculos: [];
    readonly url: string;
    readonly fechaCreacion: string;
    readonly fechaEdicion: string;

    constructor(
        nombre: string,
        fechaNacimiento: string,
        colorOjo: string,
        sexo: string,
        colorCabello: string,
        altura: string,
        peso: string,
        colorPiel: string,
        planeta: string,
        peliculas: [],
        especies: [],
        naves: [],
        vehiculos: [],
        url: string,
        fechaCreacion: string,
        fechaEdicion: string
    ) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.colorOjo = colorOjo;
        this.sexo = sexo;
        this.colorCabello = colorCabello;
        this.altura = altura;
        this.peso = peso;
        this.colorPiel = colorPiel;
        this.planeta = planeta;
        this.peliculas = peliculas;
        this.especies = especies;
        this.naves = naves;
        this.vehiculos = vehiculos;
        this.url = url;
        this.fechaCreacion = fechaCreacion;
        this.fechaEdicion = fechaEdicion;
    }

    static fromPrimitives(plainData): PeopleEntity {
        return new PeopleEntity(
            plainData.name,
            plainData.birth_year,
            plainData.eye_color,
            plainData.gender,
            plainData.hair_color,
            plainData.height,
            plainData.mass,
            plainData.skin_color,
            plainData.homeworld,
            plainData.films,
            plainData.species,
            plainData.starships,
            plainData.vehicles,
            plainData.url,
            plainData.created,
            plainData.edited
        );
    }
}