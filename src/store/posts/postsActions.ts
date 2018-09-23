export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface IDefinirPostsAction {
    type: 'DEFINIR_POSTS';
    posts: IPost[];
}
export type DefinirPosts = (posts: IPost[]) => void | IDefinirPostsAction;
export const definirPosts: DefinirPosts = (posts): IDefinirPostsAction => ({
    type: 'DEFINIR_POSTS',
    posts,
});

export type PostsAction = IDefinirPostsAction;
