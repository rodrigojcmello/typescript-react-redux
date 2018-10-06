import { Action, combineReducers, createStore } from 'redux';
// Actions
import { Contador } from './contador/ContadorTypes';
import { Item } from './itens/itensTypes';
import { Post } from './posts/postsTypes';
// Reducers
import { contador } from './contador/contadorReducers';
import itens from './itens/itensReducers';
import { posts } from './posts/postsReducers';

export interface AppState extends Action {
    contador: Contador;
    itens: Item[];
    posts: Post[];
}

const reducers = combineReducers({
    contador,
    itens,
    posts,
});

// type AppAction =
//     | ContadorAction
//     | ItensAction
//     | PostsAction;
//
// const appState: AppState = {
//     contador: { count: 0 },
//     itens: [],
//     posts: [],
// };
//
// function reducers2(state: AppState = appState, action: AppAction): AppState {
//     return {
//         contador: contador(state.contador, action)
//     };
// }

export const store = createStore(
    reducers,
// @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
