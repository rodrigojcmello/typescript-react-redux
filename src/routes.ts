import { RouteConfig } from 'react-router-config';
// Componentes
import { Acesso } from './componentes/telas/Acesso/Acesso';
import ListaContainer from './containers/ListaContainer';
import { OláMundo } from './componentes/OláMundo/OláMundo';
import Carro from './telas/Carros/componentes/Carro';
import PostsTela from './telas/Posts/PostsTela';

const routes: RouteConfig[] = [
    {
        component: ListaContainer,
        exact: true,
        path: '/',
    },
    {
        component: Carro,
        exact: true,
        path: '/acesso/carro',
    },
    {
        component: Acesso,
        exact: true,
        path: '/acesso',
    },
    {
        component: OláMundo,
        path: '/olá-mundo',
    },
    {
        component: PostsTela,
        path: '/posts',
    },
    {
        component: Acesso,
        path: '/lixo',
    },
];

export default routes;
