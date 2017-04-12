import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class PokemonRow extends Component {
    constructor(props) {
        super(props);

        this.name = props.name;
        this.number = props.number;
        this.selectPokemon = props.selectPokemon;
        this.onClickRowPockemon = this.onClickRowPockemon.bind(this);
    }

    onClickRowPockemon() {
        this.selectPokemon(this.number);
    }

    render() {
        const rowClass = classNames({
            notification: true,
            'is-success': this.props.selectedPokemonNumber === this.number // We do not assign this.props.selectedPokemonNumber in a local variable because it changes and we dont want to have the init version of this value, we want the current value in pokedex.
        });

        return (
            <tr>
                <td onClick={this.onClickRowPockemon}>
                    <p className={rowClass}>{this.number} {this.name}</p>
                </td>
            </tr>
        );
    }
}

PokemonRow.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    selectPokemon: PropTypes.object,
    selectedPokemonNumber: PropTypes.string
};

export default PokemonRow;
