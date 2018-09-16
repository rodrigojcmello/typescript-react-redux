import { Action, combineReducers, createStore } from 'redux';
import { IContador } from './contador/actions';
import contador from './contador/reducers';
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';

export interface IAppState extends Action {
    contador: IContador;
}

const reducers = combineReducers({
    // todos,
    // visibilityFilter,
    contador,
});

export const store = createStore(reducers);
