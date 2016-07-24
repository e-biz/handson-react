import ReactDom from 'react-dom';
import React, {Component} from 'react';
import _ from 'lodash';

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


let rows = _.map(helloWorlds, helloworld => {
    return React.createElement('p', {key: helloworld.hello}, helloworld.hello);
});

var root = React.createElement('div', null, rows);

ReactDom.render(root, document.getElementById('app'));