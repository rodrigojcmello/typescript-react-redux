// React
import * as React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';

// Route
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import routes from './routes';

render(
    <Provider store={store}>
        <BrowserRouter>
            <>
                <Link to='/'>Início</Link>
                <Link to='/acesso'>acesso</Link>
                <Link to='/olá-mundo'>Olá Mundo</Link>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
