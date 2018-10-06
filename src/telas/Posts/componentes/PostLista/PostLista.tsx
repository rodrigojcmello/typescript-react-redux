import * as React from 'react';
import { Post } from '../../../../store/posts/postsActions';

interface Props {
    posts: Post[];
}

class PostLista extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        console.log('teste');
    }

    public render() {
        return (
            <ul>
                {this.props.posts.map((post: Post, índice): JSX.Element => (
                    <li key={índice}>
                        {post.title}
                    </li>
                ))}
            </ul>
        );
    }
}

export default PostLista;
