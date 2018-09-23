import { IPost, PostsAction } from './postsActions';

export const posts = (state: IPost[] = [], action: PostsAction): IPost[] => {
    switch (action.type) {

        case 'DEFINIR_POSTS':
            return action.posts;

        default:
            return state;

    }
};
