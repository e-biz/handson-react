import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HelloWorldHeader from './hello-world-header';
import HelloWorldRow from './hello-world-row';

class HelloWorldTable extends Component {
    constructor(props) {
        super(props);
        this.helloWorlds = props.helloWorlds;
    }

    render() {
        let regionDelimiter;
        const rows = [];

        this.helloWorlds.forEach(helloWorld => {
            if (regionDelimiter !== helloWorld.region) {
                regionDelimiter = helloWorld.region;
                rows.push(<HelloWorldHeader name={helloWorld.region} key={helloWorld.region}/>);
                rows.push(<HelloWorldRow country={helloWorld.country} hello={helloWorld.hello} key={helloWorld.hello}/>);
            } else {
                rows.push(<HelloWorldRow country={helloWorld.country} hello={helloWorld.hello} key={helloWorld.hello}/>);
            }
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Country</th>
                    <th>Hello</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

HelloWorldTable.propTypes= {
    helloWorlds: PropTypes.array.isRequired
};

export default HelloWorldTable;
