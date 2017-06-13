import {combineReducers} from 'redux';
import pokemon from './pokemon';
import type from './type';

const app = combineReducers({
    pokemon,
    type
});

export default app;
