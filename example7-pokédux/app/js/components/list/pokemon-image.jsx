import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class PokemonImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const className = classNames('pokemon-icon', this.props.pokeStyle);

        return <span className={className}>{this.props.name}</span>;
    }
}

PokemonImage.propTypes = {
    pokeStyle: PropTypes.string,
    name: PropTypes.string
};

export default PokemonImage;