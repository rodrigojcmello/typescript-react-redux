import { Action, combineReducers, createStore } from 'redux';

// Actions
import { IContador } from './contador/contadorActions';
import { IItem } from './itens/itensActions';

// Reducers
import contador from './contador/contadorReducers';
import itens from './itens/itensReducers';

export interface IAppState extends Action {
    contador: IContador;
    itens: IItem[];
}

const reducers = combineReducers({
    contador,
    itens,
});

export const store = createStore(reducers);
