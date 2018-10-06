import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { definirPosts, DefinirPosts, Post } from '../../../store/posts/postsActions';
import { AppState } from '../../../store/store';
import chamadaAPI from '../../../úteis/chamadaAPI';
import PostLista from '../componentes/PostLista/PostLista';

interface IProps {
    definirPosts: DefinirPosts;
    posts: Post[];
}

class PostListaContainer extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        chamadaAPI('get', '/posts', (posts: Post[]): void => {
            this.props.definirPosts(posts);
        });
    }

    public render() {
        return (
            <PostLista {...this.props} />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({ definirPosts }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PostListaContainer);
