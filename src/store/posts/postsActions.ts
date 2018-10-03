export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface DefinirPostsAction {
    type: 'DEFINIR_POSTS';
    posts: Post[];
}

export type DefinirPosts = (posts: Post[]) => void | DefinirPostsAction;
export const definirPosts: DefinirPosts = (posts): DefinirPostsAction => ({
    type: 'DEFINIR_POSTS',
    posts,
});

export type PostsAction = DefinirPostsAction;
