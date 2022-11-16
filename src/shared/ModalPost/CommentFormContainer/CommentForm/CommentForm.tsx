import React, { ChangeEvent, FormEvent, RefObject, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './commentform.css';

export function CommentFormUncontrolled() {
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={ref} />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}

interface ICommentFormProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (event: FormEvent) => void;
  id?: string;
  textAreaRef?: RefObject<HTMLTextAreaElement>;
}

export function CommentFormControlled({
  value,
  onChange,
  onSubmit,
  id,
  textAreaRef,
}: ICommentFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={onChange}
        name={id}
        ref={textAreaRef}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}

interface ICommentFormikProps {
  initialValue: string;
  validate: (values: any) => object;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function CommentFormFormik({
  initialValue,
  validate,
  handleChange,
}: ICommentFormikProps) {
  return (
    <Formik
      initialValues={{ textAreaInput: initialValue }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={validate}
    >
      <Form className={styles.form}>
        <Field
          name="textAreaInput"
          component="textarea"
          className={styles.input}
          onKeyUp={handleChange}
        />
        <ErrorMessage name="textAreaInput" className={styles.errorMessage}>
          {(validate) => <div>{validate}</div>}
        </ErrorMessage>
        <button type="submit" className={styles.button}>
          Комментировать
        </button>
      </Form>
    </Formik>
  );
}
