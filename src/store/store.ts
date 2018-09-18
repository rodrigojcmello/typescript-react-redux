import { Action, combineReducers, createStore } from 'redux';
import { IContador } from './contador/contadorActions';
import contador from './contador/contadorReducers';
import { IItem } from './itens/itensActions';
import itens from './itens/itensReducers';
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
