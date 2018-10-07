import * as React from 'react';
import PostListaContainer from './containers/PostListaContainer';
import Modal from '../../componentes/Modal/Modal';

const PostsTela = () => (
    <>
        <h1>Posts</h1>
        <PostListaContainer/>
        <Modal
            título={'Título'}
            conteúdo={'Conteúdo'}
        />
    </>
);

export default PostsTela;
