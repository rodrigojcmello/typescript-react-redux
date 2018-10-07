import * as React from 'react';
import PostListaContainer from './containers/PostListaContainer';
import PostModal from './componentes/PostModal/PostModal';

const PostsTela = () => (
    <>
        <h1>Posts</h1>
        <PostListaContainer/>
        <PostModal
            título={'Título'}
            conteúdo={'Conteúdo'}
        />
    </>
);

export default PostsTela;
