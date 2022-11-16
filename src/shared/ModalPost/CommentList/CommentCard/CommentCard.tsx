import React, { useState } from 'react';
import { IComment } from '../../../../hooks/useCommentsData';
import { Icon } from '../../../Icon';
import { EColor, EIcons } from '../../../enumeration';
import { UserLink } from '../../../CardsList/Card/CardHeader/UserLink';
import styles from './commentcard.css';
import { AnswerForm } from '../AnswerForm';
import { Text } from '../../../Text';
import { Break } from '../../../Break';

export function CommentCard({ comment }: { comment: IComment }) {
  const [isFormShown, setIsFormShown] = useState(false);
  const [formValue, setFormValue] = useState('');

  function handleAnswerClick() {
    setIsFormShown(!isFormShown);
    setFormValue(comment.author + ', ');
  }

  return (
    <li className={styles.commentCard} key={comment.id}>
      <div className={styles.metaData}>
        <UserLink author={comment.author} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано </span>
          {comment.created}
        </span>
      </div>
      <p>{comment.body}</p>
      <ul className={styles.btnList}>
        <li className={styles.btnListItem}>
          <button onClick={handleAnswerClick} className={styles.btnListBtn}>
            <Icon name={EIcons.comment} size={14} />
            <Break size={6} inline />
            <Text size={14} color={EColor.black}>
              Ответить
            </Text>
          </button>
        </li>
        <li className={styles.btnListItem}>
          <button className={styles.btnListBtn}>
            <Icon name={EIcons.share} size={14} />
            <Break size={6} inline />
            <Text size={14} color={EColor.black}>
              Поделиться
            </Text>
          </button>
        </li>
        <li className={styles.btnListItem}>
          <button className={styles.btnListBtn}>
            <Icon name={EIcons.warning} size={14} />
            <Break size={6} inline />
            <Text size={14} color={EColor.black}>
              Пожаловаться
            </Text>
          </button>
        </li>
      </ul>
      {isFormShown && (
        <AnswerForm
          value={formValue}
          setValue={setFormValue}
          setIsFormShown={setIsFormShown}
        />
        // <AnswerFormUncontrolled author={comment.author} setIsFormShown={setIsFormShown} />
      )}
    </li>
  );
}
