import { Reducer } from 'redux';
import { UpdateCommentAction, UPDATE_COMMENT } from './comment/actions';
import { commentReducer } from './comment/reducer';
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './me/actions';
import { meReducer, MeState, MeAction } from './me/reducer';
import {
  POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
  DateAfterAction,
  DATA_AFTER,
} from './posts/actions';
import { PostAction, PostReducer, PostState } from './posts/reduser';
import { SetTokenAction, SET_TOKEN } from './token/action';
import { tokenReducer } from './token/reducer';

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  post: PostState;
  after: string;
};
const initialState: RootState = {
  commentText: 'Оставьте ваш комментарий!',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
  post: {
    loading: false,
    error: '',
    post: [],
  },
  after: '',
};

export type RootAction =
  | UpdateCommentAction
  | SetTokenAction
  | MeAction
  | PostAction
  | DateAfterAction;

export const rootReducer: Reducer<RootState, RootAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      };

    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };

    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: commentReducer(state.commentText, action),
      };

    case POST_REQUEST:
    case POST_REQUEST_SUCCESS:
    case POST_REQUEST_ERROR:
      return {
        ...state,
        post: PostReducer(state.post, action),
      };

    case DATA_AFTER:
      return {
        ...state,
        after: action.after,
      };

    default:
      return state;
  }
};
