import { httpClient } from '../plugins';

export const getPokemonById = async (id: string|number): Promise<string> => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // const response = await fetch(url);

    // const pokemon = await response.json();

    const pokemon = await httpClient.get(url);
      
    return pokemon.name;

    // return fetch(url)
    //     .then((response) => {return response.json()})
    //     .then((pokemon) => pokemon.name)

    // return 'Pokemon'

    

}