// React
import * as React from 'react';
import { render } from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';
// Route
import { renderRoutes } from 'react-router-config';
import { HashRouter as Router, Link, Switch } from 'react-router-dom';
import routes from './routes';

render(
    <Provider store={store}>
        <Router>
            <>
                <Link to='/'>Início</Link>
                <Link to='/acesso'>acesso</Link>
                <Link to='/olá-mundo'>Olá Mundo</Link>
                <Link to='/posts'>Posts</Link>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
