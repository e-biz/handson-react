import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PokemonTable from './pokemon-table';

import {setSelectedPokemon} from './../../actions/pokemon';

class PokemonTableContainer extends Component {
    constructor(props) {
        super(props);
        this.pokemons = props.pokemons;
        this.selectPokemon = this.selectPokemon.bind(this);
    }

    selectPokemon(pokemon) {
        this.props.setSelectedPokemon(pokemon);
    }

    render() {
        return (
          <PokemonTable
            pokemons={this.pokemons}
            selectedPokemonNumber={this.props.selectedPokemon.number}
            selectPokemon={this.selectPokemon}
          />
        );
    }
}

PokemonTableContainer.propTypes = {
    pokemons: PropTypes.array,
    setSelectedPokemon: PropTypes.func,
    selectedPokemon: PropTypes.object
};

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    selectedPokemon: state.pokemon.selectedPokemon
});

export default connect(mapStateToProps, {setSelectedPokemon})(PokemonTableContainer);