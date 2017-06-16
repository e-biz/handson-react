import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HelloWorldRow extends Component {
    constructor(props) {
        super(props);
        this.country = props.country;
        this.hello = props.hello;
    }

    render() {
        return (
            <tr>
                <td>{this.country}</td>
                <td>{this.hello}</td>
            </tr>
        );
    }
}

HelloWorldRow.propTypes = {
    country: PropTypes.string.isRequired,
    hello: PropTypes.string.isRequired
};

export default HelloWorldRow;
