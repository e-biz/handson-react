import React, {Component} from 'react';
import {Link} from 'react-router';
import PokeApi from '../services/pokeapi-service';

class TypeTable extends Component {
    constructor() {
        super();
        this.pokeApi = new PokeApi(); // we get the service
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
    }
}

export default TypeTable;
