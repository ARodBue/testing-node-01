// De esta forma no utilizamos directamente dependencias en el archivo, sino que se lo pasamos por parametro, para ello usamos el patrón adaptador y el código no esté altamente acoplado

interface BuildMakerPersonOptions {
    getUuid: () => string,
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string,
    birthdate: string;
}

export const buildMakePerson = ({ getUuid, getAge }: BuildMakerPersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {

        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}