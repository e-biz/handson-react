import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class PokemonDescription extends Component {
    constructor(props) {
        super(props);
    }

    link(pokemonType) {
        var linkName = 'type/' + pokemonType.toLowerCase();
        return <Link to={linkName}>{pokemonType}</Link>;
    }


    render() {
        const pokemon = this.props.pokemon;
        const type = pokemon.secondType ? <span>{this.link(pokemon.type)} and {this.link(pokemon.secondType)}</span> : this.link(pokemon.type);
        return (
            <p>{pokemon.name} is a Pokemon of type {type}. It has the number {pokemon.number}</p>
        );
    }
}

PokemonDescription.propTypes = {
    pokemon: PropTypes.object
};

export default PokemonDescription;