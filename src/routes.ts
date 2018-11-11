import { RouteConfig } from 'react-router-config';

import { Acesso } from './componentes/telas/Acesso/Acesso';
import ListaContainer from './containers/ListaContainer';
import { OláMundo } from './componentes/OláMundo/OláMundo';
import Carro from './telas/Carros/componentes/Carro';
import PostsTela from './telas/Posts/PostsTela';
import Teste from './telas/Teste/Teste';
import Exemplo from './telas/Exemplo/Exemplo';

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
    {
        component: Teste,
        path: '/teste',
    },
    {
        component: Exemplo,
        path: '/exemplo',
    },
];

export default routes;
