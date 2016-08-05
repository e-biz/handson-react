import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import nock from 'nock';
import TypeTable from '../../app/js/components/type-table';

describe('TypeTable suite', function () {
    var response = {
        count: 2,
        previous: null,
        results: [
            {
                url: 'http://pokeapi.co/api/v2/type/10001/',
                name: 'unknown'
            },
            {
                url: 'http://pokeapi.co/api/v2/type/10002/',
                name: 'shadow'
            }
        ],
        'next': null
    };

    nock('http://pokeapi.co')
        .get('/api/v2/type/')
        .reply(200, response);

    it('should have a table', () => {
        var typeTable = shallow(<TypeTable />);

        typeTable.setState({ types: response.results });

        expect(typeTable.find('table')).to.have.length(1);
    });

    it('should have rows', () => {
        var typeTable = shallow(<TypeTable />);

        typeTable.setState({ types: response.results });

        expect(typeTable.find('tr')).to.have.length(2);
    });

    it('should have cells', () => {
        var typeTable = shallow(<TypeTable />);

        typeTable.setState({ types: response.results });

        expect(typeTable.find('td')).to.have.length(4);
    });

    it('should contains html', () => {
        var typeTable = shallow(<TypeTable />);

        typeTable.setState({ types: response.results });

        expect(typeTable.html()).to.equal(`<table class="table is-bordered"><tbody><tr><td>0</td><td><a>unknown</a></td></tr><tr><td>1</td><td><a>shadow</a></td></tr></tbody></table>`);
    });
});