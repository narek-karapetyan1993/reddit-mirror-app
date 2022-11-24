import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { howLong } from '../../utils/js/howLong';
import { RootState } from '../reducer';

export interface IPost {
  id?: string;
  author?: string;
  flairText?: string;
  postTitle?: string;
  postPreviewSrc?: string;
  dateCreate?: string;
  commentsNum?: number;
  carmaUps?: number;
}

export const POST_REQUEST = 'POST_REQUEST';
export type PostRequestAction = {
  type: typeof POST_REQUEST;
};
export const PostRequest: ActionCreator<PostRequestAction> = () => ({
  type: POST_REQUEST,
});

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
  type: typeof POST_REQUEST_SUCCESS;
  post: IPost[];
};
export const PostRequestSuccess: ActionCreator<PostRequestSuccessAction> = (post) => ({
  type: POST_REQUEST_SUCCESS,
  post,
});

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export type PostRequestErrorAction = {
  type: typeof POST_REQUEST_ERROR;
  error: string;
};
export const PostRequestError: ActionCreator<PostRequestErrorAction> = (error) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const UPDATE_POSTS_DATA = 'UPDATE_POSTS_DATA';
export type UpdatePostsAction = {
  type: typeof UPDATE_POSTS_DATA;
  posts: [];
};
export const updatePosts: ActionCreator<UpdatePostsAction> = (posts) => ({
  type: UPDATE_POSTS_DATA,
  posts,
});

export const DATA_AFTER = 'DATA_AFTER';
export type DateAfterAction = {
  type: typeof DATA_AFTER;
  after: string;
};
export const dataAfter: ActionCreator<DateAfterAction> = (after) => ({
  type: DATA_AFTER,
  after,
});

export const PostRequestAsync =
  (afters?: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(PostRequest());
    axios
      .get('https://oauth.reddit.com/best.json', {
        headers: { Authorization: `bearer ${getState().token}` },
        params: {
          limit: 15,
          after: afters,
        },
      })
      .then((resp) => {
        const respData = resp.data.data.children;
        const afterData = resp.data.data.after;

        const postData: IPost[] = [];

        respData.map(function (post: any) {
          let data: IPost = {};

          data.id = post.data.id;
          data.author = post.data.author;
          data.flairText = post.data.link_flair_text;
          data.postTitle = post.data.title;
          data.postPreviewSrc = post.data.url;
          data.dateCreate = howLong(post.data.created_utc);
          data.commentsNum = post.data.num_comments;
          data.carmaUps = post.data.ups;

          postData.push(data);
        });

        dispatch(PostRequestSuccess(postData));
        dispatch(dataAfter(afterData));
      })
      .catch((error) => {
        console.error(error);
        dispatch(PostRequestError(error));
      });
  };
