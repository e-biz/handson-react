import React, {Component, PropTypes} from 'react';

class PokemonInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const children = [];

        React.Children.forEach(this.props.children, (child, index) => {
            children.push(child);
            if (index % 2 == 0) {
                const hrKey = index + 'hr';
                children.push(<hr key={hrKey}/>);
            }
        });

        return (
            <div className="box">
                {children}
            </div>
        );
    }
}

PokemonInformation.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};

export default PokemonInformation;
