import React, { useRef } from 'react';
import styles from './modalpost.css';
import ReactDOM from 'react-dom';
import { Text } from '../Text';
import { KarmaCounter } from '../CardsList/Card/CardControls/KarmaCounter';
import { CardPreview } from '../CardsList/Card/CardPreview';
import { FlairText } from '../CardsList/Card/CardHeader/FlairText';
import { Break } from '../Break';
import {
  CommentFormContainer,
  CommentFormFormikContainer,
  CommentFormRecoilContainer,
} from './CommentFormContainer';
import { UserLink } from '../CardsList/Card/CardHeader/UserLink';
import { CommentList } from './CommentList';
import { useNavigate, useParams } from 'react-router-dom';
import { IPostData } from '../../hooks/usePostData';

import { Dialog } from '@reach/dialog';
import { Icon } from '../Icon';
import { EIcons } from '../enumeration';

interface IModalPosts {
  postData: IPostData;
}

export function ModalPost({ postData }: IModalPosts) {
  const posts = postData.posts;

  const { id } = useParams();
  const navigate = useNavigate();

  let buttonRef = React.useRef<HTMLButtonElement>(null);

  if (!id || !posts) return null;
  const postsArr = posts.find((element) => element.id === id);
  if (postsArr === undefined) return null;

  function onDismiss() {
    navigate(-1);
  }

  return (
    <Dialog aria-labelledby="label" onDismiss={onDismiss} initialFocusRef={buttonRef}>
      <button className={styles.close} ref={buttonRef} onClick={onDismiss}>
        <Icon name={EIcons.close} size={21} />
      </button>
      <div className={styles.header}>
        <div className={styles.carma}>
          <KarmaCounter carmaUps={postsArr.carmaUps} />
        </div>
        <div className={styles.headingBlock}>
          <Text As={'h2'} size={20} mobileSize={16}>
            {postsArr.postTitle}
          </Text>
          <div className={styles.headingInfo}>
            <UserLink author={postsArr.author} />

            <Break size={8} inline />
            <Text size={14} mobileSize={16}>
              <span className={styles.publishedLabel}>Опубликовано </span>
              {postsArr.dateCreate}
            </Text>
            {postsArr.flairText && <FlairText flairText={postsArr.flairText} />}
          </div>
        </div>
      </div>
      <Break size={36} top block />
      <div className={styles.content}>
        <CardPreview postPreviewSrc={postsArr.postPreviewSrc} />
        <Break size={36} top block />
        {/* <CommentFormContainer /> */}
        <CommentFormRecoilContainer />
        {/* <CommentFormFormikContainer /> */}
        <CommentList postId={postsArr.id}></CommentList>
      </div>
    </Dialog>
  );
}
