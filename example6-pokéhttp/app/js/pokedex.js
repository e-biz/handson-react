import _ from 'lodash';
import React, {Component} from 'react';
import PokemonInformation from './components/pokemon-information';
import PokemonTable from './components/pokemon-table';
import PokemonImage from './components/pokemon-image'
import PokemonDescription from './components/pokemon-description'
import pokemons from '../root/pokedex.json';

export default class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.pokemons = pokemons;
        this.state = {selectedPokemonNumber: this.pokemons[0].number};
        this.selectPokemon = this.selectPokemon.bind(this);
    }

    selectPokemon(pokemonId) {
        this.setState({selectedPokemonNumber: pokemonId});
    }

    render() {
        var selectedPokemon = _(this.pokemons).filter({number: this.state.selectedPokemonNumber})
                                              .first();

        return (
            <div className="columns">
                <div className="column is-one-quarter">
                    <PokemonTable pokemons={this.pokemons} selectedPokemonNumber={selectedPokemon.number}
                                  selectPokemon={this.selectPokemon}/>
                </div>
                <div className="column">
                    <PokemonInformation>
                        <PokemonImage name={selectedPokemon.name} pokeStyle={selectedPokemon.style}/>
                        <PokemonDescription pokemon={selectedPokemon}/>
                    </PokemonInformation>
                </div>
            </div>
        );
    }
}