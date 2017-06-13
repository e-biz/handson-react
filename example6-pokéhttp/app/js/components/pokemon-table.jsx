import React, {Component, PropTypes} from 'react';
import PokemonRow from './pokemon-row';

class PokemonTable extends Component {
    constructor(props) {
        super(props);
        this.pokemons = props.pokemons;
        this.selectPokemon = props.selectPokemon;
    }

    render() {
        const pokemonRows = this.pokemons.map(pokemon =>
            <PokemonRow name={pokemon.name} key={pokemon.number} number={pokemon.number}
                        selectedPokemonNumber={this.props.selectedPokemonNumber} selectPokemon={this.selectPokemon}/>
        );

        return (
            <table className="table is-bordered">
                <tbody>
                    {pokemonRows}
                </tbody>
            </table>
        );
    }
}

PokemonTable.propTypes = {
    pokemons: PropTypes.array,
    selectPokemon: PropTypes.func,
    selectedPokemonNumber: PropTypes.string
};

export default PokemonTable;