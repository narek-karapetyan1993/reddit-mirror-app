import { Reducer } from 'react';
import {
  IPost,
  PostRequestAction,
  PostRequestErrorAction,
  PostRequestSuccessAction,
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
} from './actions';

export type PostState = {
  loading: boolean;
  error: string;
  post: IPost[];
};

export type PostAction =
  | PostRequestAction
  | PostRequestSuccessAction
  | PostRequestErrorAction;

export const PostReducer: Reducer<PostState, PostAction> = (state, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        post: action.post,
        loading: false,
      };
    default:
      return state;
  }
};
