import React, { ChangeEvent, FormEvent } from 'react';
import { CommentFormControlled, CommentFormFormik } from './CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { updateComment } from '../../../store/comment/actions';
import { useRecoilState } from 'recoil';
import { commentTextState } from '../../../store/commentRecoil/atom';


export function CommentFormContainer() {
  const myComment = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(updateComment(''));
  }

  return (
    <CommentFormControlled
      value={myComment}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export function CommentFormRecoilContainer() {
  const [commentText, setCommentText] = useRecoilState(commentTextState);
  
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setCommentText('');
  }

 return (
   <CommentFormControlled
     value={commentText}
     onChange={handleChange}
     onSubmit={handleSubmit}
   />
 );
}

export function CommentFormFormikContainer() {
  const value = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  const validate = (values: any) => {
    const errors: { textAreaInput?: string } = {};
    if (!values.textAreaInput) {
      errors.textAreaInput = 'Ввыдите текст комментария';
    } else if (values.textAreaInput.length < 5) {
      errors.textAreaInput = 'В комментарии должно быть не менее 5 букв';
    }
    return errors;
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(event.target.value));
  };

  return (
    <CommentFormFormik
      initialValue={value}
      validate={validate}
      handleChange={handleChange}
    />
  );
}
