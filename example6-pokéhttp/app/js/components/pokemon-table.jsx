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
    pokemons: PropTypes.object,
    selectPokemon: PropTypes.object,
    selectedPokemonNumber: PropTypes.object
};

export default PokemonTable;