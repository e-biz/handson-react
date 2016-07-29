import React, {Component} from 'react';

export default class PokemonInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var children = [];

        React.Children.forEach(this.props.children, (child, index) => {
            children.push(child);
            if (index % 2 == 0) {
                let hrKey = index + 'hr';
                children.push(<hr key={hrKey}/>)
            }
        });

        return (
            <div className="box">
                {children}
            </div>
        );
    }
}