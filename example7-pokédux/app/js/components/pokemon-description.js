import React, {Component} from 'react';
import {Link} from 'react-router'

export default class PokemonDescription extends Component {
    constructor(props) {
        super(props);
    }

    link(pokemonType) {
        var linkName = 'type/' + pokemonType.toLowerCase();
        return <Link to={linkName}>{pokemonType}</Link>
    }

    render() {
        var pokemon = this.props.pokemon;
        var type = pokemon.secondType ? <span>{this.link(pokemon.type)} and {this.link(pokemon.secondType)}</span> : this.link(pokemon.type);
        return (
            <p>{pokemon.name} is a Pokemon of type {type}. It has the number {pokemon.number}</p>
        )
    }
}