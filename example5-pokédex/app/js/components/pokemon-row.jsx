import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class PokemonRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    }
}

PokemonRow.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    selectPokemon: PropTypes.func,
    selectedPokemonNumber: PropTypes.string
};

export default PokemonRow;
