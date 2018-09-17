// React
import * as React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';

// Compoenentes
// import TarefaEntrada from './containers/TarefaEntrada';
// import Filtro from './components/Filtro';
// import VisibleTodoList from './containers/VisibleTodoList';
import Contador from './containers/Contador';
import ItemEntrada from './containers/ItemEntrada';
import ItemLista from './containers/ItemLista';

render(
    <Provider store={store}>
        <>
            {/* <TarefaEntrada />
            <Filtro />
            <VisibleTodoList /> */}
            <Contador />
            <ItemEntrada />
            <ItemLista />
        </>
    </Provider>,
    document.getElementById('root'),
);
