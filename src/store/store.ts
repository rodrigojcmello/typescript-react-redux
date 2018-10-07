import { Action, combineReducers, createStore } from 'redux';
// Actions
import { Contador } from './contador/ContadorTypes';
import { Item } from './itens/itensTypes';
import { Post } from './posts/postsTypes';
// Reducers
import { contador } from './contador/contadorReducers';
import itens from './itens/itensReducers';
import { posts } from './posts/postsReducers';
import { modal } from './modal/modalReducers';

export interface AppState extends Action {
    contador: Contador;
    itens: Item[];
    posts: Post[];
}

const reducers = combineReducers({
    contador,
    itens,
    posts,
    modal,
});

export const store = createStore(
    reducers,
// @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
