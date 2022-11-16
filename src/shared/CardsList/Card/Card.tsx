import React from 'react';
import styles from './card.css';
import { CardControls } from './CardControls';
import { CardHeader } from './CardHeader';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';
import { IPost } from '../../../store/posts/actions';

export function Card({
  id,
  author,
  postTitle,
  postPreviewSrc,
  dateCreate,
  commentsNum,
  carmaUps,
}: IPost) {
  return (
    <li className={styles.card}>
      <CardHeader
        id={id}
        author={author}
        dateCreate={dateCreate}
        postTitle={postTitle}
      />
      <CardPreview postPreviewSrc={postPreviewSrc} />
      <CardControls commentsNum={commentsNum} carmaUps={carmaUps} />
      <CardMenu />
    </li>
  );
}
