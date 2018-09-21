// React
import * as React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// Compoenentes
import { OláMundo } from './components/OláMundo/OláMundo';
import { Acesso } from './components/telas/Acesso/Acesso';
import ListaContainer from './containers/ListaContainer';

render(
    <Provider store={store}>
        <BrowserRouter>
            <>
                <Link to='/'>Início</Link>
                <Link to='/acesso'>acesso</Link>
                <Link to='/olá-mundo'>Olá Mundo</Link>
                <Switch>
                    <Route exact={true} path='/' component={ListaContainer} />
                    <Route path='/acesso' component={Acesso} />
                    <Route path='/olá-mundo' component={OláMundo} />
                </Switch>
            </>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
