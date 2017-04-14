import * as actions from './../constant/pokemonActions';

export function setSelectedPokemonNumber(number) {
    return {
        type: actions.SET_SELECT_POKEMON_NUMBER,
        number
    };
}

export function setSelectedPokemon(pokemon) {
    return {
        type: actions.SET_SELECT_POKEMON,
        pokemon
    };
}
