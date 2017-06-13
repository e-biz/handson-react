import React, {Component} from 'react';
import PokemonInformation from './list/pokemon-information';
import PokemonTable from './list/pokemon-table-container';
import PokemonImage from './list/pokemon-image-container';
import PokemonDescription from './list/pokemon-description-container';

class Pokedex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-one-quarter">
                    <PokemonTable />
                </div>
                <div className="column">
                    <PokemonInformation>
                        <PokemonImage />
                        <PokemonDescription />
                    </PokemonInformation>
                </div>
            </div>
        );
    }
}

export default Pokedex;