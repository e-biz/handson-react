import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import nock from 'nock';
import TypeDescription from '../../app/js/components/type-description';

describe('PokemonNotFound suite', function () {

    var response = {
        'name': 'flying',
        'generation': {
            'url': 'http://pokeapi.co/api/v2/generation/1/',
            'name': 'generation-i'
        },
        'damage_relations': {
            'half_damage_from': [
                {
                    'url': 'http://pokeapi.co/api/v2/type/2/',
                    'name': 'fighting'
                },
                {
                    'url': 'http://pokeapi.co/api/v2/type/7/',
                    'name': 'bug'
                },
                {
                    'url': 'http://pokeapi.co/api/v2/type/12/',
                    'name': 'grass'
                }
            ]
        },
        'game_indices': [
            {
                'generation': {
                    'url': 'http://pokeapi.co/api/v2/generation/1/',
                    'name': 'generation-i'
                },
                'game_index': 2
            }
        ],
        'move_damage_class': {
            'url': 'http://pokeapi.co/api/v2/move-damage-class/2/',
            'name': 'physical'
        },
        'moves': [
            {
                'url': 'http://pokeapi.co/api/v2/move/16/',
                'name': 'gust'
            }
        ],
        'pokemon': [
            {
                'slot': 2,
                'pokemon': {
                    'url': 'http://pokeapi.co/api/v2/pokemon/6/',
                    'name': 'charizard'
                }
            }
        ],
        'id': 3,
        'names': [
            {
                'name': 'Vol',
                'language': {
                    'url': 'http://pokeapi.co/api/v2/language/5/',
                    'name': 'fr'
                }
            }
        ]
    };

    nock('http://pokeapi.co')
        .get('/api/v2/type/flying')
        .reply(200, response);

    it('should have two div', () => {
        var typeDescription = shallow(<TypeDescription params={{typeName: 'flying'}}/>);

        expect(typeDescription.find('div')).to.have.length(2);
    });

    it('should have a article', () => {
        var typeDescription = shallow(<TypeDescription params={{typeName: 'flying'}}/>);

        expect(typeDescription.find('article')).to.have.length(1);
    });

    it('should contains text', () => {
        var typeDescription = shallow(<TypeDescription params={{typeName: 'flying'}}/>);

        typeDescription.setState({ type: response });

        expect(typeDescription.text()).to.contain("\"name\": \"flying\"");
    });

    it('should contains title', () => {
        var typeDescription = shallow(<TypeDescription params={{typeName: 'flying'}}/>);

        typeDescription.setState({ type: response });

        expect(typeDescription.find('div.message-header').text()).to.contain("flying");
    });
});