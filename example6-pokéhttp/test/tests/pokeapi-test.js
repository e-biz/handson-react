import {expect} from 'chai';
import nock from 'nock';
import PokeApi from '../../app/js/services/pokeapi-service.js';

describe('PokéApi test suite,', () => {
    it('should call response when 200 status code on types', done => {
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

        var pokeApi = new PokeApi();

        pokeApi.types(success => {
            if (success.results.length !== 2) {
                throw 'pokéapi success must return something like ' + JSON.stringify(response);
            }
            done();
        }, error => {
            if (error) {
                throw 'error must be undefined';
            }
            done();
        })
    });

    it('should call error when 400 status code on types', done => {
        var response = {
            errorMessage: 'ERROR - 400'
        };
        nock('http://pokeapi.co')
            .get('/api/v2/type/')
            .reply(400, response);

        var pokeApi = new PokeApi();

        pokeApi.types(success => {
            if (success) {
                throw 'success must be undefined';
            }
            done();
        }, error => {
            if (error.status !== 400) {
                throw 'error should be call in case of 400.';
            }
            done();
        })
    });

    it('should call response when 200 status code on type', done => {
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

        var pokeApi = new PokeApi();

        pokeApi.type(response.name, success => {
            if (success.moves.length !== 1) {
                throw 'pokéapi success must return something like ' + JSON.stringify(response);
            }
            done();
        }, error => {
            if (error) {
                throw 'error must be undefined';
            }
            done();
        })
    });

    it('should call error when 400 status code on type', done => {
        var response = {
            errorMessage: 'ERROR - 400'
        };
        nock('http://pokeapi.co')
            .get('/api/v2/type/flying')
            .reply(400, response);

        var pokeApi = new PokeApi();

        pokeApi.type('flying', success => {
            if (success) {
                throw 'success must be undefined';
            }
            done();
        }, error => {
            if (error.status !== 400) {
                throw 'error should be call in case of 400.';
            }
            done();
        })
    });

    it('should abort a request', () => {
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
            .delay(2000)
            .reply(200, response);

        var pokeApi = new PokeApi();

        pokeApi.types(success => {
            if (success) {
                throw 'success must be undefined';
            }
            done();
        }, error => {
            if (error) {
                throw 'error must be undefined';
            }
            done();
        });

        pokeApi.abort();
    });

    it('should throw an error when cannot abort a request', () => {
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
            .delay(2000)
            .reply(200, response);

        var pokeApi = new PokeApi();

        expect(pokeApi.abort.bind(pokeApi)).to.throw('Cannot abort request, because it does not exist.');
    });
});