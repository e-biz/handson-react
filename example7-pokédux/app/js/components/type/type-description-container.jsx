import 'react-progress-2/main.css';
import React, {Component, PropTypes} from 'react';
import PokeApi from '../../services/pokeapi-service';
import Progress from 'react-progress-2';
import TypeDescription from './type-description';

class TypeDescriptionContainer extends Component {
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
          <TypeDescription type={this.state.type}/>
        );
    }
}

TypeDescriptionContainer.propTypes = {
    params: PropTypes.object
};

export default TypeDescriptionContainer;
