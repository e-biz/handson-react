import React, {Component} from 'react';
import {Link} from 'react-router';
import PokeApi from '../services/pokeapi-service';

class TypeTable extends Component {
    constructor() {
        super();
        this.pokeApi = new PokeApi();
        this.state = {types: []};
    }

    componentDidMount() {
        this.pokeApi.types(types => this.setState({types: types.results}), error => {throw new Error(error);});
    }

    componentWillUnmount() {
        try {
            this.pokeApi.abort();
        } catch (error) {
            throw new Error(error);
        }
    }

    render() {
        let types = this.state.types.map((type, index) => {
            let href = '/type/' + type.name;
            return (
                <tr key={index}>
                    <td>
                        {index}
                    </td>
                    <td>
                        <Link to={href}>{type.name}</Link>
                    </td>
                </tr>
            );
        });

        return (
            <table className='table is-bordered'>
                <tbody>
                    {types}
                </tbody>
            </table>
        );
    }
}

export default TypeTable;
