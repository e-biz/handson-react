import React, {Component} from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import PokeApi from '../services/PokeApi';

export default class TypeTable extends Component {
    constructor() {
        super();
        this.pokeApi = new PokeApi();
        this.state = {types: []}
    }

    componentDidMount() {
        this.pokeApi.types(types => this.setState({types: types.results}), error => console.warn(error));
    }

    componentWillUnmount() {
        this.pokeApi.abort();
    }

    render() {
        let types = _.map(this.state.types, (type, index) => {
            let href = '/type/'+type.name;
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
        )
    }
}