import React, {Component} from 'react';
import classNames from 'classnames';

export default class PokemonImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var className = classNames('pokemon-icon', this.props.pokeStyle);

        return <span className={className}>{this.props.name}</span>;
    }
}