import React, {Component} from 'react';
import PokemonRow from './pokemon-row';
import _ from 'lodash';

export default class PokemonTable extends Component {
    constructor(props) {
        super(props);
        this.pokemons = props.pokemons;
        this.selectPokemon = props.selectPokemon;
    }

    render() {
        let pokemonRows = _.map(this.pokemons, pokemon => {
            return <PokemonRow name={pokemon.name} key={pokemon.number} number={pokemon.number}
                               selectedPokemonNumber={this.props.selectedPokemonNumber} selectPokemon={this.selectPokemon}/>
        });

        return (
            <table className="table is-bordered">
                <tbody>
                    {pokemonRows}
                </tbody>
            </table>
        );
    }
}