import * as actions from './../constant/pokemonActions';
import pokemons from './../../root/pokedex.json';

const pokemon = (state = {
    pokemons,
    selectedPokemon: pokemons[0],
    selectedPokemonNumber: pokemons[0].number
}, action) => {
    switch (action.type) {
    case actions.SET_SELECT_POKEMON_NUMBER:
        return Object.assign({}, state, {selectedPokemonNumber: action.number});
    case actions.SET_SELECT_POKEMON:
        return Object.assign({}, state, {selectedPokemon: action.pokemon});
    default:
        return state;
    }
};

export default pokemon;
