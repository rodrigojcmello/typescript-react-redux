import { Post } from '../store/posts/postsActions';
import { domínio } from './constantesApp';

type Callback = (posts: Post[]) => void;

const chamadaAPI = (método: string, endpoint: string, callback: Callback, dados?: any) => {
    fetch(`${domínio}${endpoint}`, {
        method: método,
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(dados),
    })
        .then((resposta) => resposta.json())
        .then((resposta) => {
            callback(resposta);
        })
        .catch((erro) => {
            console.error('Erro', erro);
            alert('Erro');
        });
};

export default chamadaAPI;
