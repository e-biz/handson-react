import React, {Component, PropTypes} from 'react';
import PokeApi from '../services/pokeapi-service';

class TypeDescription extends Component {
    constructor(props) {
        super(props);
        this.pokeApi = new PokeApi();
        this.state = {type: {}};
    }

    componentDidMount() {
        this.pokeApi.type(this.props.match.params.typeName, type => this.setState({type: type}), error => {throw new Error(error);});
    }

    componentWillUnmount() {
        try {
            this.pokeApi.abort();
        } catch (error) {
            throw new Error(error);
        }
    }

    render() {
        return (
            <article className="message is-primary">
                <div className="message-header">
                    {this.state.type.name}
                </div>
                <div className="message-body">
                    {JSON.stringify(this.state.type, null, 2)}
                </div>
            </article>
        );
    }
}

TypeDescription.propTypes = {
    match: PropTypes.object
};

export default TypeDescription;
