import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HelloWorldHeader extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        return (
            <tr>
                <td colSpan="2">{this.name}</td>
            </tr>
        );
    }
}

HelloWorldHeader.propTypes= {
    name: PropTypes.string.isRequired
};

export default HelloWorldHeader;
