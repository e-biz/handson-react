import * as actions from './../constant/typeActions';

const type = (state = {
    types: []
}, action) => {
    switch (action.type) {
    case actions.SET_TYPES:
        return Object.assign({}, state, {types: action.types});
    default:
        return state;
    }
};

export default type;
