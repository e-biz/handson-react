import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PokemonImage from './pokemon-image';

class PokemonImageContainer extends Component {
    render() {
        return (<PokemonImage name={this.props.selectedPokemon.name} pokeStyle={this.props.selectedPokemon.style}/>);
    }
}

PokemonImageContainer.propTypes = {
    selectedPokemon: PropTypes.object
};

const mapStateToProps = state => ({
    selectedPokemon: state.pokemon.selectedPokemon
});

export default connect(mapStateToProps)(PokemonImageContainer);