import { Action, combineReducers, createStore } from 'redux';
// Actions
import { Contador } from './contador/ContadorInterfaces';
import { Item } from './itens/itensInterfaces';
import { Post } from './posts/postsActions';
// Reducers
import { contador } from './contador/contadorReducers';
import itens from './itens/itensReducers';
import { posts } from './posts/postsReducers';

export interface IAppState extends Action {
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
// const appState: IAppState = {
//     contador: { count: 0 },
//     itens: [],
//     posts: [],
// };
//
// function reducers2(state: IAppState = appState, action: AppAction): IAppState {
//     return {
//         contador: contador(state.contador, action)
//     };
// }

export const store = createStore(
    reducers,
// @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
