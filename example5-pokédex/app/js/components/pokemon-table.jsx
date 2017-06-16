import React, {Component, PropTypes} from 'react';
import PokemonRow from './pokemon-row';

class PokemonTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    }
}

PokemonTable.propTypes = {
    pokemons: PropTypes.array,
    selectPokemon: PropTypes.func,
    selectedPokemonNumber: PropTypes.string
};

export default PokemonTable;