import * as React from 'react';
import { IPost } from '../../../../store/posts/postsActions';

interface IProps {
    posts: IPost[];
}

class PostLista extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    public render() {
        return (
            <ul>
                {this.props.posts.map((post: IPost, índice): JSX.Element => (
                    <li key={índice}>
                        {post.title}
                    </li>
                ))}
            </ul>
        );
    }
}

export default PostLista;
