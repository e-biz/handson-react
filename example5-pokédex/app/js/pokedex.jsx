import React, {Component, PropTypes} from 'react';
import PokemonInformation from './components/pokemon-information';
import PokemonTable from './components/pokemon-table';
import PokemonImage from './components/pokemon-image';
import PokemonDescription from './components/pokemon-description';

class Pokedex extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    }
}

Pokedex.propTypes = {
    pokemons: PropTypes.array.isRequired
};

export default Pokedex;