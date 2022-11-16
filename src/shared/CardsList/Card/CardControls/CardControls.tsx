import React from 'react';
import styles from './cardcontrols.css';
import { CommentButton } from './CommentButton';
import { DeleteButton } from './DeleteButton';
import { KarmaCounter } from './KarmaCounter';
import { RatingButton } from './RatingButton';
import { ShareButton } from './ShareButton';
import { IPost } from '../../../../store/posts/actions';

export function CardControls({ commentsNum, carmaUps }: IPost) {
  return (
    <div className={styles.controls}>
      <KarmaCounter carmaUps={carmaUps} />

      <CommentButton commentsNum={commentsNum} />

      <div className={styles.actions}>
        <RatingButton />

        <ShareButton />

        <DeleteButton />
      </div>
    </div>
  );
}
