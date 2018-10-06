import { connect } from 'react-redux';
import { AppState } from '../../../store/store';
import PostLista from '../componentes/PostLista/PostLista';
import { bindActionCreators, Dispatch } from 'redux';
import { definirPosts } from '../../../store/posts/postsActions';

const mapStateToProps = (state: AppState) => ({
    posts: state.posts,
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({ definirPosts }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PostLista);
