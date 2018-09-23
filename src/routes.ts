import { RouteConfig } from 'react-router-config';

// Componentes
import { OláMundo } from './components/OláMundo/OláMundo';
import { Acesso } from './components/telas/Acesso/Acesso';
import ListaContainer from './containers/ListaContainer';
// import PostLista from './screens/Posts/components/PostLista/PostLista';
import PostListaContainer from './screens/Posts/containers/PostListaContainer';

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
    {
        component: PostListaContainer,
        path: '/posts',
    },
    {
        component: Acesso,
        path: '/lixo',
    },
];

export default routes;
