import * as React from 'react';
import { DefinirPosts, Post } from '../../../../store/posts/postsTypes';
import chamadaAPI from '../../../../úteis/chamadaAPI';

interface Props {
    definirPosts: DefinirPosts;
    posts: Post[];
}

class PostLista extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        chamadaAPI('get', '/posts', (posts: Post[]): void => {
            this.props.definirPosts(posts);
        });
    }

    public render() {
        return (
            <ul>
                {this.props.posts.map((post: Post, índice) => (
                    <li key={índice}>
                        {post.title}
                    </li>
                ))}
            </ul>
        );
    }
}

export default PostLista;
