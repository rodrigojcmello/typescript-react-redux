import { Action, combineReducers, createStore } from 'redux';

// Actions
import { IContador } from './contador/contadorActions';
import { IItem } from './itens/itensActions';
import { IPost } from './posts/postsActions';

// Reducers
import contador from './contador/contadorReducers';
import itens from './itens/itensReducers';
import { posts } from './posts/postsReducers';

export interface IAppState extends Action {
    contador: IContador;
    itens: IItem[];
    posts: IPost[];
}

const reducers = combineReducers({
    contador,
    itens,
    posts,
});

export const store = createStore(
    reducers,
// @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
