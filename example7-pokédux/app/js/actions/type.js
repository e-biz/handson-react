import * as actions from './../constant/typeActions';

export function setTypes(types) {
    return {
        type: actions.SET_TYPES,
        types
    };
}
