import SuperAgent from 'superagent';

// Endpoint from where we are going to get pokemon types
const typeUrl = 'http://pokeapi.co/api/v2/type/';

export default class PokeApi {
    constructor() {
        this.request = null;
    }

    // Retrieve all types
    types(success, error) {
        this.request = SuperAgent.get(/*url*/)
                                 .set('Accept', 'application/json') //We are expecting a JSON
                                 .end(function (errorResponse, response) {
                                   //handle success and error
                                 });
    }

    // Retrieve type details
    type(typeName, success, error) {
      // to complete
    }

    // We call this method to cancel request
    abort() {
        if (this.request && this.request.abort) {
            this.request.abort();
            this.request = null;
        } else {
            throw 'Cannot abort request, because it does not exist.';
        }
    }
}