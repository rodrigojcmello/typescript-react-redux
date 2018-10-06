import { DefinirPosts, DefinirPostsAction } from './postsTypes';

export const definirPosts: DefinirPosts = (posts: any): DefinirPostsAction => ({
    type: 'DEFINIR_POSTS',
    posts,
});
