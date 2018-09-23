import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { definirPosts, DefinirPosts, IPost } from '../../../store/posts/postsActions';
import { IAppState } from '../../../store/store';
import apiRequest from '../../../utils/apiRequest';
import PostLista from '../components/PostLista/PostLista';

interface IProps {
    definirPosts: DefinirPosts;
    posts: IPost[];
}

class PostListaContainer extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    public componentDidMount() {
        apiRequest('get', '/posts', (posts: IPost[]): void => {
            this.props.definirPosts(posts);
        });
    }
    public render() {
        return (
            <PostLista {...this.props} />
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({ definirPosts }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PostListaContainer);
