import React, {Component} from 'react';
import PokeApi from '../services/PokeApi';

export default class TypeDescription extends Component {
    constructor(props) {
        super(props);
        this.pokeApi = new PokeApi();
        this.state = {type: {}}
    }

    componentDidMount() {
        this.pokeApi.type(this.props.params.typeName, type => this.setState({type: type}), error => console.warn(error));
    }

    componentWillUnmount() {
        this.pokeApi.abort();
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