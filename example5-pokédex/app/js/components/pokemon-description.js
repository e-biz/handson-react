import React, {Component} from 'react';

export default class PokemonDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var pokemon = this.props.pokemon;
        var type = pokemon.secondType ? pokemon.type + ' and ' + pokemon.secondType : pokemon.type;
        return (
            <p>{pokemon.name} is a Pokemon of type {type}. It has the number {pokemon.number}</p>
        )
    }
}