import React, {Component, PropTypes} from 'react';
import PokemonDescription from './pokemon-description';
import {connect} from 'react-redux';

class PokemonDescriptionContainer extends Component {

    render() {
        return (<PokemonDescription pokemon={this.props.selectedPokemon}/>);
    }
}

PokemonDescriptionContainer.propTypes = {
    selectedPokemon: PropTypes.object
};

const mapStateToProps = state => ({
    selectedPokemon: state.pokemon.selectedPokemon
});

export default connect(mapStateToProps)(PokemonDescriptionContainer);