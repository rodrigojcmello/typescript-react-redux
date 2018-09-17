import { Action, combineReducers, createStore } from 'redux';
import { IContador } from './contador/actions';
import contador from './contador/reducers';
import { IItem } from './itens/actions';
import itens from './itens/reducers';
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';

export interface IAppState extends Action {
    contador: IContador;
    itens: IItem[];
}

const reducers = combineReducers({
    // todos,
    // visibilityFilter,
    contador,
    itens,
});

export const store = createStore(reducers);
