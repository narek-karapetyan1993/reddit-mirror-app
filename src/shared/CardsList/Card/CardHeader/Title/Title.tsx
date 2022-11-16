import React, { useContext, useState } from 'react';
import styles from './title.css';
import { Text } from '../../../../Text';
import { IPost } from '../../../../../store/posts/actions';
import { ModalPost } from '../../../../ModalPost';
import { Link } from 'react-router-dom';

export function Title({ id, postTitle }: IPost) {
  return (
    <h2 className={styles.title}>
      <Link
        to={{
          pathname: `/posts/${id}`,
        }}
        className={styles.postLink}
        onClick={() => {
          document.body.classList.add('stop');
        }}
      >
        <Text size={20} mobileSize={16}>
          {postTitle}
        </Text>
      </Link>
    </h2>
  );
}
