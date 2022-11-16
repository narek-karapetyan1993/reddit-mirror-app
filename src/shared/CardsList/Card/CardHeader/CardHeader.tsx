import React, { useEffect, useState } from 'react';
import styles from './cardheader.css';
import { Title } from './Title';
import { UserLink } from './UserLink';
import { IPost } from '../../../../store/posts/actions';
import { useIsMounted } from '../../../../utils/react/UseIsMounted';

export function CardHeader({ id, author, postTitle, dateCreate }: IPost) {
  const [isMounted] = useIsMounted();

  return (
    <div className={styles.cardHeader}>
      <div className={styles.metaData}>
        {isMounted && <UserLink author={author} />}

        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано </span>
          {dateCreate}
        </span>
      </div>
      <Title id={id} postTitle={postTitle} />
    </div>
  );
}
