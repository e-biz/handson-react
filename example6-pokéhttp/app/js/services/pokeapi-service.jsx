import SuperAgent from 'superagent';

const typeUrl = 'http://pokeapi.co/api/v2/type/';

export default class PokeApi {
    constructor() {
        this.request = null;
    }

    types(success, error) {
        this.request = SuperAgent.get(typeUrl)
                                 .set('Accept', 'application/json')
                                 .end(function (errorResponse, response) {
                                     if (errorResponse || !response.ok) {
                                         error(errorResponse);
                                     } else {
                                         success(response.body);
                                     }
                                 });
    }

    type(typeName, success, error) {
        this.request = SuperAgent.get(typeUrl + typeName)
                                 .set('Accept', 'application/json')
                                 .end(function (errorResponse, response) {
                                     if (errorResponse || !response.ok) {
                                         error(errorResponse);
                                     } else {
                                         success(response.body);
                                     }
                                 });
    }

    abort() {
        if (this.request && this.request.abort) {
            this.request.abort();
            this.request = null;
        } else {
            throw 'Cannot abort request, because it does not exist.';
        }
    }
}