import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { CommentFormControlled } from '../../CommentFormContainer/CommentForm';
import styles from './answerform.css';

interface IAnswerFormUncontrolledProps {
  author?: string;
  setIsFormShown?: (value: boolean) => void;
}

export function AnswerFormUncontrolled({
  author,
  setIsFormShown,
}: IAnswerFormUncontrolledProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log('uncontrolled form');
    ref.current?.focus();
    if (ref.current) ref.current.value = author + ', ';
    ref.current?.setSelectionRange(
      ref.current?.value?.length,
      ref.current?.value?.length
    );
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsFormShown?.(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={ref} />
      <button type="submit" className={styles.button}>
        Ответить
      </button>
    </form>
  );
}

interface IAnswerFormProps {
  value?: string;
  setValue?: (value: string) => void;
  setIsFormShown?: (value: boolean) => void;
}

export function AnswerForm({ value, setValue, setIsFormShown }: IAnswerFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
    if (value) {
      ref.current?.setSelectionRange(value?.length, value?.length);
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue?.(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsFormShown?.(false);
    setValue?.('');
  }

  return (
    <CommentFormControlled
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      textAreaRef={ref}
    />
  );
}
