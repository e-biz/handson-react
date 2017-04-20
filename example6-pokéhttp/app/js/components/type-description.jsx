import 'react-progress-2/main.css';
import React, {Component, PropTypes} from 'react';
import PokeApi from '../services/pokeapi-service';

class TypeDescription extends Component {
    constructor(props) {
        super(props);
        this.pokeApi = new PokeApi();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
    }
}

TypeDescription.propTypes = {
    params: PropTypes.object
};

export default TypeDescription;
