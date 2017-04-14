import 'react-progress-2/main.css';
import React, {Component, PropTypes} from 'react';
import Progress from 'react-progress-2';

class TypeDescription extends Component {
    render() {
        return (
            <article className="message is-primary">
                <div className="message-header">
                    {this.props.type.name}
                </div>
                <Progress.Component/>
                <div className="message-body">
                    {JSON.stringify(this.props.type, null, 2)}
                </div>
            </article>
        );
    }
}

TypeDescription.propTypes = {
    type: PropTypes.object
};

export default TypeDescription;
