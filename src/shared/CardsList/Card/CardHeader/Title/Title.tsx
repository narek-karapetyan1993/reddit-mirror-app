import React from 'react';
import styles from './title.css';
import { Text } from '../../../../Text';
import { IPost } from '../../../../../store/posts/actions';
import { Link, useLocation } from 'react-router-dom';

export function Title({ id, postTitle }: IPost) {
  const location = useLocation();
  
  return (
    <h2 className={styles.title}>
      <Link
        to={`/posts/${id}`}
        className={styles.postLink}
        state={{ backgroundLocation: location }}
      >
        <Text size={20} mobileSize={16}>
          {postTitle}
        </Text>
      </Link>
    </h2>
  );
}
