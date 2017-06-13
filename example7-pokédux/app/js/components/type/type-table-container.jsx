import React, {Component, PropTypes} from 'react';
import PokeApi from '../../services/pokeapi-service';
import {connect} from 'react-redux';
import TypeTable from './type-table';
import {setTypes} from './../../actions/type';

class TypeTableContainer extends Component {
    constructor() {
        super();
        this.pokeApi = new PokeApi();
    }

    componentDidMount() {
        if (this.props.types.length === 0) {
            this.pokeApi.types(
                types => {
                    this.props.setTypes(types.results);
                },
                error => {
                    throw new Error(error);
                }
            );
        }
    }

    componentWillUnmount() {
        if (this.props.types.length === 0) {
            try {
                this.pokeApi.abort();
            } catch (error) {
                throw new Error(error);
            }
        }
    }

    render() {
        return (
            <TypeTable types={this.props.types} />
        );
    }
}

TypeTableContainer.propTypes = {
    types: PropTypes.array,
    setTypes: PropTypes.func
};

const mapStateToProps = state => ({
    types: state.type.types
});

export default connect(mapStateToProps, {setTypes})(TypeTableContainer);
