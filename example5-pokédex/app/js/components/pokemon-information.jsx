import React, {Component, PropTypes} from 'react';

class PokemonInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    }
}

PokemonInformation.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};

export default PokemonInformation;
