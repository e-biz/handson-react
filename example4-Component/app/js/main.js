import ReactDom from 'react-dom';
import React, {Component} from 'react';
import _ from 'lodash';

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

class HelloWorldHeader extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        return (
            <tr>
                <td>{this.name}</td>
                <td></td>
            </tr>
        );
    }
}

class HelloWorldTable extends Component {
    constructor(props) {
        super(props);
        this.helloWorlds = props.helloWorlds;
    }

    render() {
        let regionDelimiter;
        let rows = [];

        _.each(this.helloWorlds, helloWorld => {
            if (regionDelimiter !== helloWorld.region) {
                regionDelimiter = helloWorld.region;
                rows.push(<HelloWorldHeader name={helloWorld.region} key={helloWorld.region}/>);
                rows.push(<HelloWorldRow country={helloWorld.country} hello={helloWorld.hello} key={helloWorld.hello}/>);
                return;
            }
            regionDelimiter = helloWorld.region;
            rows.push(<HelloWorldRow country={helloWorld.country} hello={helloWorld.hello} key={helloWorld.hello}/>);
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

const helloWorlds = [
    {region: 'asia', country: 'Japan', hello: 'こんにちは'},
    {region: 'asia', country: 'China', hello: '你好'},
    {region: 'asia', country: 'Korea', hello: '여보세요'},
    {region: 'asia', country: 'Vietnam', hello: 'chào bạn'},
    {region: 'europa', country: 'France', hello: 'Bonjour'},
    {region: 'europa', country: 'Germany', hello: 'Hallo'},
    {region: 'europa', country: 'Italy', hello: 'Ciao'},
    {region: 'america', country: 'Canada', hello: 'CréVindiou'},
    {region: 'america', country: 'USA', hello: 'Hello'},
    {region: 'america', country: 'Mexico', hello: 'Hola'},
];

ReactDom.render(
    <HelloWorldTable helloWorlds={helloWorlds}/>,
    document.getElementById('app')
);
