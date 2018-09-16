// React
import * as React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { store } from './store/store';
// import { createStore } from 'redux';
// import reducers from './store/store';
// const store = createStore(reducers);

// Compoenentes
// import TarefaEntrada from './containers/TarefaEntrada';
// import Filtro from './components/Filtro';
// import VisibleTodoList from './containers/VisibleTodoList';
import Contador from './containers/Contador';

render(
    <Provider store={store}>
        <>
            {/* <TarefaEntrada />
            <Filtro />
            <VisibleTodoList /> */}
            <Contador />
        </>
    </Provider>,
    document.getElementById('root'),
);
