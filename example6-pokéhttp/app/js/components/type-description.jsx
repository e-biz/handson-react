import 'react-progress-2/main.css';
import React, {Component, PropTypes} from 'react';
import PokeApi from '../services/pokeapi-service';
import Progress from 'react-progress-2';

class TypeDescription extends Component {
    constructor(props) {
        super(props);
        this.pokeApi = new PokeApi();
        this.state = {type: {}};
    }

    componentDidMount() {
        Progress.show();
        this.pokeApi.type(this.props.params.typeName,
                          type => {
                              this.setState({type: type});
                              Progress.hide();
                          },
                          error => {throw new Error(error);});
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
                <Progress.Component/>
                <div className="message-body">
                    {JSON.stringify(this.state.type, null, 2)}
                </div>
            </article>
        );
    }
}

TypeDescription.propTypes = {
    params: PropTypes.object
};

export default TypeDescription;
