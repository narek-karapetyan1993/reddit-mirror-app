import { Reducer } from 'react';
import { UPDATE_COMMENT, UpdateCommentAction } from './actions';

export const commentReducer: Reducer<string, UpdateCommentAction> = (state, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return action.commentText;
    default:
      return state;
  }
};
