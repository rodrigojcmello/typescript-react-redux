import { RouteConfig } from 'react-router-config';

// Componentes
import { OláMundo } from './components/OláMundo/OláMundo';
import { Acesso } from './components/telas/Acesso/Acesso';
import ListaContainer from './containers/ListaContainer';

const routes: RouteConfig[] = [
    {
        component: ListaContainer,
        exact: true,
        path: '/',
    },
    {
        component: Acesso,
        path: '/acesso',
    },
    {
        component: OláMundo,
        path: '/olá-mundo',
    },
];

export default routes;
