import { ActionCreator } from 'redux';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  commentText: string;
};

export const updateComment: ActionCreator<UpdateCommentAction> = (
  commentText: string
) => ({
  type: UPDATE_COMMENT,
  commentText,
});
